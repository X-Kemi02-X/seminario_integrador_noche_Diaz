from rest_framework import status
from rest_framework.permissions import IsAdminUser
from rest_framework.response import Response
from rest_framework.views import APIView

from django.contrib.auth.models import User
from django.core.mail import EmailMultiAlternatives
from django.conf import settings

from store.serializers.email import SendNotificationSerializer


class SendNotificationView(APIView):
    permission_classes = [IsAdminUser]

    def post(self, request):
        serializer = SendNotificationSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        subject = serializer.validated_data['subject']
        message = serializer.validated_data['message']
        user_id = serializer.validated_data.get('user_id')

        if user_id is not None:
            users = User.objects.filter(id=user_id, is_active=True)
        else:
            users = User.objects.filter(is_active=True, is_staff=False)

        sent   = 0
        failed = 0

        for user in users:
            if not user.email:
                failed += 1
                continue
            try:
                msg = EmailMultiAlternatives(
                    subject=subject,
                    body=message,
                    from_email=settings.DEFAULT_FROM_EMAIL,
                    to=[user.email],
                )
                msg.send(fail_silently=False)
                sent += 1
            except Exception:
                failed += 1

        return Response({
            'detail': f'Correo enviado a {sent} usuario(s).',
            'sent':   sent,
            'failed': failed,
        }, status=status.HTTP_200_OK)
