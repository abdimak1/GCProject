
from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class Note(models.Model):
    body = models.TextField(null=True, blank=True)
    updated_at = models.DateTimeField(auto_now=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.body[0:50]


class Resource(models.Model):
    name = models.CharField(max_length=200, null=True)
    type = models.CharField(max_length=200, null=True)
    amount = models.CharField(max_length=200, null=True)
    price_perKilo = models.CharField(max_length=200, null=True)
    updated_at = models.DateTimeField(auto_now=True)
    created_at = models.DateTimeField(auto_now_add=True, null=True)
    user = models.ForeignKey(User, null=True ,on_delete=models.SET_NULL)

    def __str__(self):
        return self.name


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    fname = models.CharField(max_length=200, null=True)
    Mname = models.CharField(max_length=200, null=True)
    lname = models.CharField(max_length=200, null=True)
    phone = models.CharField(max_length=200, null=True)
    sex = models.CharField(max_length=200, null=True)
    profile = models.CharField(max_length=200, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.fname

class Federal(models.Model):
    user = models.OneToOneField(User,null=True , on_delete=models.CASCADE)
    Federal_name = models.CharField(max_length=200, null=False)
    

    def __str__(self):
        return self.Federal_name


class Region(models.Model):
    user = models.OneToOneField(User,null=True , on_delete=models.CASCADE)
    Region_name = models.CharField(max_length=200, null=False)
    created_by = models.ForeignKey(Federal, null=True ,on_delete=models.SET_NULL)

    def __str__(self):
        return self.Region_name


class Zone(models.Model):
    user = models.OneToOneField(User,null=True , on_delete=models.CASCADE)
    Zone_name = models.CharField(max_length=200, null=False)
    created_by = models.ForeignKey(Region, null=True ,on_delete=models.SET_NULL)

    def __str__(self):
        return self.Zone_name


class Woreda(models.Model):
    user = models.OneToOneField(User, null=True ,on_delete=models.CASCADE)
    woreda_name = models.CharField(max_length=200, null=False)
    created_by = models.ForeignKey(Zone, null=True ,on_delete=models.SET_NULL)


    def __str__(self):
        return self.woreda_name


class KebeleAdmin(models.Model):
    user = models.OneToOneField(User,null=True , on_delete=models.CASCADE)
    kebele_name = models.CharField(max_length=200, null=False)
    created_by = models.ForeignKey(Woreda, null=True ,on_delete=models.SET_NULL)

    def __str__(self):
        return self.kebele_name

class DevelopmentalAgent(models.Model):
    user = models.OneToOneField(User,null=True , on_delete=models.CASCADE)
    specialization = models.CharField(max_length=200, null=False)
    created_by = models.ForeignKey(KebeleAdmin, null=True ,on_delete=models.SET_NULL)

    def __str__(self):
        return self.specialization


class KebeleBusiness(models.Model):
    user = models.OneToOneField(User,null=True , on_delete=models.CASCADE)
    unique_name = models.CharField(max_length=200, null=False)
    created_by = models.ForeignKey(KebeleAdmin, null=True ,on_delete=models.SET_NULL)

    def __str__(self):
        return self.unique_name



class PrivateSector(models.Model):
    user = models.OneToOneField(User,null=True ,on_delete=models.CASCADE)
    organization_name = models.CharField(max_length=200, null=False)
    tin_number = models.CharField(max_length=200, null=False)
    created_by = models.ForeignKey(KebeleBusiness, null=True ,on_delete=models.SET_NULL)

    def __str__(self):
        return self.organization_name


class Farmer(models.Model):
    user = models.OneToOneField(User,null=True , on_delete=models.CASCADE)
    land_map_id = models.CharField(max_length=200, null=False)
    land_size = models.CharField(max_length=200, null=False)
    created_by = models.ForeignKey(KebeleBusiness, null=True ,on_delete=models.SET_NULL)

    def __str__(self):
        return self.land_map_id  




class Report(models.Model):
    reported_by= models.CharField(max_length=200, null=True)
    reported_to=models.CharField(max_length=200, null=True)
    name = models.CharField(max_length=200, null=False)
    created_at = models.DateTimeField(auto_now_add=True, null=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


class Announcement(models.Model):
    sent_by=models.CharField(max_length=200, null=True)
    title = models.CharField(max_length=200, null=True)
    discription = models.TextField(null=True, blank=True)
    to = models.OneToOneField(User, null=True, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True, null=True)

    def __str__(self):
        return self.title


class Disease(models.Model):
    name = models.CharField(max_length=200, null=True)
    crop = models.CharField(max_length=200, null=True)
    user=models.ForeignKey(User,null=True,on_delete=models.SET_NULL)
    created_at = models.DateTimeField(auto_now_add=True, null=True)

    def __str__(self):
        return self.name

class Post(models.Model):
    posted_by = models.OneToOneField(User,null=True , on_delete=models.CASCADE)
    title = models.CharField(max_length=200, null=True)
    discription = models.CharField(max_length=200, null=True)
    thumbnail=models.CharField(max_length=200, null=True)
    rank=models.CharField(max_length=200, null=True)

    created_at = models.DateTimeField(auto_now_add=True, null=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name