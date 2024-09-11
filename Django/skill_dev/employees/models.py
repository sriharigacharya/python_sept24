from django.db import models


class TestModel(models.Model):
    name = models.CharField(max_length=100)

class Department(models.Model):
    name=models.CharField(max_length=255)
    def __str__(self):
        return self.name
    
class Employees(models.Model):
    name=models.CharField(max_length=255)
    dept=models.ForeignKey(Department, on_delete=models.CASCADE)
    job_title=models.CharField(max_length=255)
    salary=models.DecimalField(max_digits=10,decimal_places=2)
    bonus=models.DecimalField(max_digits=10,decimal_places=2,null=True,blank=True)

    def __str__(self):
        return f'{self.name}-{self.job_title}'
    
    
    

