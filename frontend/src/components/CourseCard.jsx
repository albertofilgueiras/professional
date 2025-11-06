import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Clock, BookOpen } from 'lucide-react';

const CourseCard = ({ course }) => {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
      <div className="relative h-48 overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          R$ {course.price}
        </div>
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{course.title}</CardTitle>
        <CardDescription className="text-sm text-gray-500">{course.installments}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 mb-4">{course.description}</p>
        <div className="flex items-center space-x-4 text-sm text-gray-600">
          <div className="flex items-center space-x-1">
            <BookOpen className="w-4 h-4" />
            <span>{course.modules} módulos</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{course.totalHours}h total</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Link to={`/curso/${course.slug}`} className="w-full">
          <Button className="w-full bg-blue-600 hover:bg-blue-700">
            Mais Informações
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;