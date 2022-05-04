from backend.movielibrary import serializers
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from backend.movielibrary.models import Movie
from rest_framework.response import Response

@api_view(['GET'])
@permission_classes([AllowAny])
def get_movies(request):
    movies = Movie.objects.all()
    serializer = serializers.MovieSerializer(movies, many=True)
    return Response(serializer.data)