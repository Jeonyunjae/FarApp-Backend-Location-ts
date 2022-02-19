# FarApp-Backend-Location-ts

# src
# │   app.js          # App entry point 진입점
# └───api             # Express route controllers for all the endpoints of the app
# 엔드포인트에서 라우팅을 하는 부분
# └───config          # Environment variables and configuration related stuff 환경 변수등 저장하는 폴더
# └───jobs            # Jobs definitions for agenda.js agenda.js를 사용하는 경우에만!
# └───loaders         # Split the startup process into modules 모듈의 시작점을 적어두는 부분
# └───models          # Database models DB 모델들
# └───services        # All the business logic is here 비즈니스 로직을 작성하는 부분
# └───subscribers     # Event handlers for async task async에 대한 이벤트 핸들러
# └───types           # Type declaration files (d.ts) for Typescript Typescript 사용하는 
# 경우에만!