# Description

NestJS 그냥 찍먹해본거임

노마드코더 무료강의 따라한것 REST API

https://nomadcoders.co/nestjs-fundamentals/lobby <-이거 
---

# 전체적인 구조
```bash
NodeJS express를 Java Spring처럼 구조화시킨 프레임워크
[repository는 없이 간단히 메모리 위에서 구동했드라고]

@Controller -> @Controller('uri') (사용자 요청을 서비스로 연결해주는 곳)

# @Get() / @Post() / @DELETE ... 여기도 이렇게 표시해서 사용함.
# @Post()에서의 데이터는  -> create(@Body() movieData:CreateMovieDto) 이렇게 받고
# @그냥 파라미터는 -> getOne(@Param("id") movieId: number) 이렇게 받으면 됨

@Servire -> @Injectable (비즈니스 로직 부분)

참고할거는 DTO,entity 생성하는 부분(typesrcipt) + main.ts에서 불필요한 정보 날라오는거 막는정도. 
```

# 테스트 방법
```bash
이것도 Java Spring이랑 비슷함
javascript test 할수있는 JEST를 이용한다.

beforeAll, beforeEach, afterAll그런것도 사용할 수 있음

유닛테스트에서는 그냥 서비스로직에 대한 함수정도 확인하는 정도

통합테스트(e2e)에서는 http 통신으로 컨트롤러 부분까지 확인가능함.
(근대 이거 할때 main.ts에 있는것 처럼 테스트환경이랑 실제 환경을 같게 마춰주어야함)

# describe('test name',()-> {테스트 로직})
테스트 로직에서는
유닛테스트
# it('sub test name',()=>{ ... })

통합테스트(e2e)
# it('uri num',()=>{ request.... }).[get | post | ... ].send(...).expect( 반환값 )..
아무튼 이렇게 테스트 할 있는 환경이 구성되어있음.
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```



## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
