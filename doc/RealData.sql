INSERT INTO   MEMBERS 
( EMAIL , PWD )
VALUES ('jeon@gmail.com','1111');

INSERT INTO   MEMBERS 
( EMAIL , PWD )
VALUES ('jeons@gmail.com','2222');



INSERT INTO   CONTENTS 
( MNO , TITLE , CDATE , FREQ , SPEED, STATE )
VALUES (3,'서울 시내 여행2', '2013-5-11',300,1,1);

INSERT INTO   CONTENTS 
( MNO , TITLE , CDATE , FREQ , SPEED, STATE )
VALUES (3,'런던 여행', '2013-8-24',300,1,1);



INSERT INTO   LOCATIONS 
( TITLE , DESCRIPTION)
VALUES ( '서울역','경부선, 경의선, 인천국제공항철도의 기점이다. 인근 서울 지하철 1호선과 4호선의 지하 서울역과 연결되어 있다.');

INSERT INTO   LOCATIONS 
( TITLE , DESCRIPTION)
VALUES ( '남산','남산은 서울특별시 중구와 용산구에 걸쳐있는 산이다.');

INSERT INTO   LOCATIONS 
( TITLE , DESCRIPTION)
VALUES ( '광화문','경복궁의 남쪽에 있는 정문이다.');

INSERT INTO   LOCATIONS 
( TITLE , DESCRIPTION)
VALUES ( '경복궁','경복궁은 대한민국 서울 세종로에 있는 조선 왕조의 법궁이다.');

INSERT INTO   LOCATIONS 
( TITLE , DESCRIPTION)
VALUES ( '삼청공원','삼청 공원은 서울 종로구 삼청동에 있는 공원');

INSERT INTO   LOCATIONS 
( TITLE , DESCRIPTION)
VALUES ( '창덕궁','창덕궁은 대한민국 서울특별시에 있는 조선 시대 궁궐로 동쪽으로 창경궁과 맞닿아 있다.');

INSERT INTO   LOCATIONS 
( TITLE , DESCRIPTION)
VALUES ( '종묘','종묘는 조선 왕조의 역대 제왕들과 왕후들의 신주를 모시고 제례를 봉행하는 유교 사당이다.');



//서울역
INSERT INTO   POINTS 
(CNO, LNO , LAT , LNG , PDATE , STATE)
VALUES (2,11, 37.553161, 126.972605, '2013-5-11', 1);
INSERT INTO TRANSPORTS 
( PNO ,STATE )
VALUES (22,0);

//남산으로 이동
INSERT INTO   POINTS 
(CNO, LAT , LNG , PDATE , STATE)
VALUES (2, 37.552851, 126.976593, '2013-5-11', 0);
INSERT INTO TRANSPORTS 
( PNO ,STATE )
VALUES (23,0);

//남산
INSERT INTO   POINTS 
(CNO, LNO , LAT , LNG , PDATE , STATE)
VALUES (2,12, 37.553721, 126.981002, '2013-5-11', 1);
INSERT INTO TRANSPORTS 
( PNO ,STATE )
VALUES (24,1);

//광화문으로 이동
INSERT INTO   POINTS 
(CNO, LAT , LNG , PDATE , STATE)
VALUES (2, 37.560662, 126.975509, '2013-5-11', 0);
INSERT INTO TRANSPORTS 
( PNO ,STATE )
VALUES (25,1);


//광화문 
INSERT INTO   POINTS 
(CNO, LNO , LAT , LNG , PDATE , STATE)
VALUES (2,13, 37.571564, 126.976561, '2013-5-11', 1);
INSERT INTO TRANSPORTS 
( PNO ,STATE )
VALUES (26,0);


//경복궁
INSERT INTO   POINTS 
(CNO, LNO , LAT , LNG , PDATE , STATE)
VALUES (2,14, 37.576964, 126.976872, '2013-5-11', 1);
INSERT INTO TRANSPORTS 
( PNO ,STATE )
VALUES (27,0);


//삼청공원으로 이동
INSERT INTO   POINTS 
(CNO, LAT , LNG , PDATE , STATE)
VALUES (2, 37.581062, 126.980170, '2013-5-11', 0);
INSERT INTO TRANSPORTS 
( PNO ,STATE )
VALUES (28,1);


//삼청공원
INSERT INTO   POINTS 
(CNO, LNO , LAT , LNG , PDATE , STATE)
VALUES (2,15, 37.590397, 126.985685, '2013-5-11', 1);
INSERT INTO TRANSPORTS 
( PNO ,STATE )
VALUES (29,1);


//창덕궁으로 이동
INSERT INTO   POINTS 
(CNO, LAT , LNG , PDATE , STATE)
VALUES (2, 37.580909, 126.984998, '2013-5-11', 0);
INSERT INTO TRANSPORTS 
( PNO ,STATE )
VALUES (30,0);


//창덕궁
INSERT INTO   POINTS 
(CNO, LNO , LAT , LNG , PDATE , STATE)
VALUES (2,16, 37.580790, 126.991693, '2013-5-11', 1);
INSERT INTO TRANSPORTS 
( PNO ,STATE )
VALUES (31,0);


//종묘
INSERT INTO   POINTS 
(CNO, LNO , LAT , LNG , PDATE , STATE)
VALUES (2,17, 37.574850, 126.994010, '2013-5-11', 1);


INSERT INTO   LOCATIONS 
( TITLE , DESCRIPTION)
VALUES ( '타워 브릿지','');

INSERT INTO   LOCATIONS 
( TITLE , DESCRIPTION)
VALUES ( '피카딜리 서커스','');

INSERT INTO   LOCATIONS 
( TITLE , DESCRIPTION)
VALUES ( '빅벤과 국회 의사당','');

INSERT INTO   LOCATIONS 
( TITLE , DESCRIPTION)
VALUES ( '하이드 파크','');

INSERT INTO   LOCATIONS 
( TITLE , DESCRIPTION)
VALUES ( '런던 동물원','');

INSERT INTO   LOCATIONS 
( TITLE , DESCRIPTION)
VALUES ( '리젠트 파크','');

INSERT INTO   LOCATIONS 
( TITLE , DESCRIPTION)
VALUES ( '노팅힐','');


//타워 브릿지
INSERT INTO   POINTS 
(CNO, LNO , LAT , LNG , PDATE , STATE)
VALUES (3,18, 51.505270, -0.075530, '2013-8-24', 1);
INSERT INTO TRANSPORTS 
( PNO ,STATE )
VALUES (32,1);

//피카딜리 서커스로 이동
INSERT INTO POINTS 
(CNO, LAT , LNG , PDATE , STATE)
VALUES (3, 51.511024, -0.104541, '2013-8-24', 0);
INSERT INTO TRANSPORTS 
( PNO ,STATE )
VALUES (33,1);

//피카딜리 서커스
INSERT INTO   POINTS 
(CNO, LNO , LAT , LNG , PDATE , STATE)
VALUES (3,19, 51.510069, -0.133858, '2013-8-24', 1);
INSERT INTO TRANSPORTS 
( PNO ,STATE )
VALUES (34,1);

//빅벤으로 이동
INSERT INTO POINTS 
(CNO, LAT , LNG , PDATE , STATE)
VALUES (3, 51.506918, -0.127467, '2013-8-24', 0);
INSERT INTO TRANSPORTS 
( PNO ,STATE )
VALUES (35,1);

//빅벤과 국회 의사당
INSERT INTO   POINTS 
(CNO, LNO , LAT , LNG , PDATE , STATE)
VALUES (3,20, 51.500613, -0.124463, '2013-8-24', 1);
INSERT INTO TRANSPORTS 
( PNO ,STATE )
VALUES (36,1);

//하이드 파크로 이동 
INSERT INTO POINTS 
(CNO, LAT , LNG , PDATE , STATE)
VALUES (3, 51.502303, -0.142164, '2013-8-24', 0);
INSERT INTO TRANSPORTS 
( PNO ,STATE )
VALUES (37,1);

//하이드 파크 
INSERT INTO   POINTS 
(CNO, LNO , LAT , LNG , PDATE , STATE)
VALUES (3,21, 51.507218, -0.165853, '2013-8-24', 1);
INSERT INTO TRANSPORTS 
( PNO ,STATE )
VALUES (38,1);

//런던 동물원로 이동
INSERT INTO POINTS 
(CNO, LAT , LNG , PDATE , STATE)
VALUES (3, 51.519877, -0.170231, '2013-8-24', 0);
INSERT INTO TRANSPORTS 
( PNO ,STATE )
VALUES (39,1);

//런던 동물원
INSERT INTO   POINTS 
(CNO, LNO , LAT , LNG , PDATE , STATE)
VALUES (3,22, 51.531225, -0.156798, '2013-8-24', 1);
INSERT INTO TRANSPORTS 
( PNO ,STATE )
VALUES (40,1);

//리젠트 파크로 이동
INSERT INTO POINTS 
(CNO, LAT , LNG , PDATE , STATE)
VALUES (3, 51.529339, -0.148485, '2013-8-24', 0);
INSERT INTO TRANSPORTS 
( PNO ,STATE )
VALUES (41,1);

//리젠트 파크
INSERT INTO   POINTS 
(CNO, LNO , LAT , LNG , PDATE , STATE)
VALUES (3,22, 51.523332, -0.146468, '2013-8-24', 1);
INSERT INTO TRANSPORTS 
( PNO ,STATE )
VALUES (42,1);

//노팅힐
INSERT INTO   POINTS 
(CNO, LNO , LAT , LNG , PDATE , STATE)
VALUES (3,22, 51.511161, -0.205325, '2013-8-24', 1);
INSERT INTO TRANSPORTS 
( PNO ,STATE )
VALUES (43,1);
