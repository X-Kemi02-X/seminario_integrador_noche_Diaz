from rest_framework import serializers


class SendNotificationSerializer(serializers.Serializer):
    subject  = serializers.CharField()
    message  = serializers.CharField()
    user_id  = serializers.IntegerField(required=False, allow_null=True)
