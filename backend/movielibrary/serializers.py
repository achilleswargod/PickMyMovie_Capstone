from rest_framework import serializers
from .models import Movie


class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = ['movie_id','title','description','ratings','cast', 'poster', 'user_id']
        depth = 1