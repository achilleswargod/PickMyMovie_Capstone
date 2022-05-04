from django.db import models

# Create your models here.
class Movie(models.Model):
    movie_id = models.CharField(max_length=255,blank=True)
    title = models.CharField(max_length=255,blank=True)
    description = models.CharField(max_length=255,blank=True)
    ratings = models.IntegerField()
    cast = models.CharField(max_length=255,blank=True)
    poster = models.ImageField()
