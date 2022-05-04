from urllib import response
from django.shortcuts import render
from backend.movielibrary import serializers

from backend.movielibrary.models import Movie
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.
class MovieList(APIView):
    def get(self, request);
        movie = Movie.objects.all()
        serializer = serializers.MovieSerializer(movie, many=True)
        return Response(serializer.data)