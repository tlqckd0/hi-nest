import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, Req, Res } from '@nestjs/common';
import { request, response } from 'express';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {

    constructor(private readonly moviesService:MoviesService){

    }

    @Get()
    getAll() {
        return this.moviesService.getAll();
    }

    @Get("/search")
    search(@Query('year') searchingYear: string) {
        return `We are searching for a movie made after :${searchingYear}`;
    }


    @Get("/:id")
    getOne(@Param("id") movieId: number) {
        return this.moviesService.getOne(movieId);
    }


    @Post()
    create(@Body() movieData:CreateMovieDto) {
        return this.moviesService.createMoive(movieData);
    }


    @Delete("/:id")
    remove(@Param("id") movieId: number) {
        return this.moviesService.deleteOne(movieId);
    }


    @Patch('/:id')
    patch(@Param('id') movieId: number, @Body() updateData:UpdateMovieDto) {
        return this.moviesService.update(movieId, updateData);
    }


}
