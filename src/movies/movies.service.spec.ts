import { NotFoundException } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";
import { MoviesService } from "./movies.service"

describe('MovieService', () => {
    let service: MoviesService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [MoviesService],
        }).compile();

        service = module.get<MoviesService>(MoviesService);

    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    describe('getAll', () => {

        it('should retrun an array', () => {
            const result = service.getAll();
            expect(result).toBeInstanceOf(Array);
        })

    })

    describe('getOne', () => {

        it('should return a movie', () => {

            service.createMoive({
                title: "Test Movie",
                genres: ["test"],
                year: 2000,
            });

            const movie = service.getOne(1);
            expect(movie).toBeDefined();
            expect(movie.id).toEqual(1);
        })

        it('should throw 404 error', () => {
            try {
                service.getOne(999);
            } catch (e) {
                expect(e).toBeInstanceOf(NotFoundException);
                expect(e.message).toEqual(`Movie with Id${999} not found.`);
            }
        })
    })

    describe('deleteOne', () => {
        it('should delete movie', () => {
            service.createMoive({
                title: "Test Movie",
                genres: ["test"],
                year: 2000,
            });

            const movies = service.getAll();
            service.deleteOne(1);
            const afterDelete = service.getAll();
            expect(afterDelete.length).toEqual(movies.length - 1);

        })

        it('should delete false', () => {
            service.createMoive({
                title: "Test Movie",
                genres: ["test"],
                year: 2000,
            });

            try {
                service.deleteOne(999);
            } catch (e) {
                expect(e).toBeInstanceOf(NotFoundException);
                expect(e.message).toEqual(`Movie with Id${999} not found.`);
            }
        })
    })
    describe('create', () => {

        it('should create movie', () => {
            const beforeCreate = service.getAll().length;
            service.createMoive({
                title: "Test Movie",
                genres: ["test"],
                year: 2000,
            });
            const afterCreate = service.getAll().length;
            expect(afterCreate).toEqual(beforeCreate + 1);
        })

    })
    describe('update', () => {
        it('should update a movie', () => {
            service.createMoive({
                title: "Test Movie",
                genres: ["test"],
                year: 2000,
            });
            service.update(1, { title: "Updated Test" });
            const movie = service.getOne(1);
            expect(movie.title).toEqual("Updated Test");
        })

        
        it('should throw a NotFound false', () => {
            try {
                service.deleteOne(999);
            } catch (e) {
                expect(e).toBeInstanceOf(NotFoundException);
                expect(e.message).toEqual(`Movie with Id${999} not found.`);
            }
        })
    });

})