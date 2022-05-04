from django.db import models
from authentication.models import User

# Create your models here.
class Movie(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    movie_id = models.CharField(max_length=255,blank=True)
    title = models.CharField(max_length=255,blank=True)
    description = models.CharField(max_length=255,blank=True)
    ratings = models.IntegerField()
    cast = models.CharField(max_length=255,blank=True)
    poster = models.ImageField()
