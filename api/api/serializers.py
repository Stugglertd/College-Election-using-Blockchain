from rest_framework import serializers

class StudentSerializer(serializers.Serializer):
  prn = serializers.CharField(max_length=100)
  name = serializers.CharField(max_length=100)
  roll = serializers.CharField(max_length=100)
  email = serializers.CharField(max_length=100)  