from movielibrary.serializers import MovieSerializer
from movielibrary import serializers
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from movielibrary.models import Movie
from rest_framework.response import Response
from rest_framework import status

@api_view(['GET'])
@permission_classes([AllowAny])
def get_movies(request):
    movies = Movie.objects.all()
    serializer = serializers.MovieSerializer(movies, many=True)
    return Response(serializer.data)

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def user_favorited_movies(request):
    print(
        'User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'POST':
        serializer = MovieSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        movies = Movie.objects.filter(user_id=request.user.id)
        serializer = MovieSerializer(movies, many=True)
        return Response(serializer.data)