Array.prototype.shuffle = function () {
  let i;
  let num;
  let d;
  for (i = this.length - 1; i > 0; i--) {
    num = Math.floor(Math.random() * (i + 1));
    d = this[num];
    this[num] = this[i];
    this[i] = d;
  }
  return this;
};

window.addEventListener("load", function () {
  programStart();
});


function programStart() {
  // entry point
}

const app = new Vue({
  el: '#app',
  data() {
    return {
      teams: [
        {
          id: 't_1',
          name: 'Команда 1',
          score: 0,
          animatedScore: 0
        },
        {
          id: 't_2',
          name: 'Команда 2',
          score: 0,
          animatedScore: 0
        }
      ],
      pages: [
        {
          name: 'Вопрос',
          id: 'page_1',
          disabled: {'disabled': false},
          stage: 1,
          questions: [
            {
              id: 'q1_1',
              text: 'Кто заложил традицию изучения иностранных языков в кадетских училищах?',
              points: 1,
              disabled: {'disabled': false},
              answer: 'Славную традицию изучения нескольких иностранных языков в кадетских училищах ' +
                'заложила именно императрица Анна Иоановна «Повелеваю учредить школы, - говорилось в ' +
                'Указе императрицы Анны Иоанновны от 1731 года, - чтобы…отроки от семи до пятнадцати лет ' +
                'от роду воинскому делу обучались и наукам разным: чтению и письму, закону божьему, ' +
                'арифметике и геометрии, географии и истории, на конях скакать, танцам, языкам иностранным ' +
                'и прочим пользительным Отечеству ремеслам».'
            },
            {
              id: 'q1_2',
              text: 'Какие предметы изучались в кадетских корпусах царской России?',
              points: 2,
              disabled: {'disabled': false},
              answer: 'Помимо иностранных языков в корпусе изучались «российская словесность» (язык и литература), ' +
                'история (в том числе история Древней Греции и Рима — курс, которой предполагал ознакомление ' +
                'воспитанников с произведениями древних авторов не только в современных, французских и немецких ' +
                ', но и на латинском языке), геральдика и генеалогия. Кадеты обучались верховой езде, ' +
                'фехтованию, танцам, юриспруденции, а также древним языкам. На протяжении всего времени ' +
                'существования кадетских корпусов курс обучения и программы периодически менялись.'
            },
            {
              id: 'q1_3',
              text: 'Кем в 1715 г. в Санкт-Петербурге была учреждена Морская академия или академия морской гвардии?',
              points: 3,
              disabled: {'disabled': false},
              answer: 'Петр Первый в 1715 г. в Санкт-Петербурге учредил Морскую академию или академию морской гвардии.'
            },
            {
              id: 'q1_4',
              text: 'Что означает слово «кадет»?',
              points: 4,
              disabled: {'disabled': false},
              answer: 'В Проекте Морской Академии, представленный Петру его автором бароном Сент-Илером, ' +
                'впервые было употреблено слово  «кадет», которое происходит от уменьшительного «капдет» ' +
                'на гасконском наречии, производного от латинского «капителлеум», что буквально значит ' +
                '«маленький капитан» или «маленький глава».'
            }
          ]
        },
        {
          name: 'Вопрос',
          id: 'page_2',
          disabled: {'disabled': false},
          stage: 1,
          questions: [
            {
              id: 'q2_1',
              text: 'Когда официально появились кадетские корпуса?',
              points: 5,
              disabled: {'disabled': false},
              answer: '16 января 1712 года Пётр I основал первую русскую Военную инженерную школу. 31 ' +
                'января 1910 г. император Николай II повелел: «Вследствие установленной по историческим ' +
                'данным преемственности 2-го кадетского корпуса от учрежденной императором Петром I 16 ' +
                'января 1712 г.в Москве Инженерной школы, отдать Второму кадетскому корпусу старшинство ' +
                'со дня учреждения названной школы, то есть с 16 января 1712 года». Это означало, что ' +
                'Второй кадетский корпус официально стал преемником Инженерной школы.   И уже 29 июня 1731 г. ' +
                'был принят Указ императрицы Анны Иоанновны о создании Сухопутного шляхетского кадетского ' +
                'корпуса, после которого во всех официальных документах появилось слово кадет и кадетский ' +
                'корпус.   Таким образом, мы можем с полной исторической уверенностью сказать, что ' +
                'кадетские корпуса в России ведут свой временной отсчет с 1701 года.'
            },
            {
              id: 'q2_2',
              text: 'В 1802 году, по велению императора Александра I,  в Санкт-Петербурге учреждается ' +
                'Пажеский корпус, становится военно-учебным заведением закрытого типа. Пажеский корпус — ' +
                'привилегированное учебное заведение, цель которого – «доставить сыновьям заслуженных ' +
                'родителей, предназначенных к офицерской службе преимущественно в войсках гвардии, как ' +
                'общее военное образование, так и соответствующее их предназначению воспитание».' +
                'Какой официальный знак Пажеского корпуса?',
              points: 6,
              disabled: {'disabled': false},
              answer: 'Белый мальтийский крест - официальный знак Пажеского корпуса.'
            },
            {
              id: 'q2_3',
              text: 'Назовите заветы мальтийских рыцарей, которые взяты воспитанниками Пажеского корпуса ' +
                'в качестве моральных и этических норм.',
              points: 7,
              disabled: {'disabled': false},
              answer: '«Ты будешь относиться с уважением к слабому и сделаешься его защитником», «Ты будешь ' +
                'любить страну, в которой родился», «Ты не отступишь перед врагом»,  «Ты не будешь лгать и ' +
                'останешься верным данному слову», «Ты будешь щедр и будешь всем благотворить», «Ты везде и ' +
                'повсюду будешь поборником справедливости и добра против несправедливости и зла».'
            },
            {
              id: 'q2_4',
              text: 'Сколько кадетских корпусов существовало к 1917 году в России?',
              points: 8,
              disabled: {'disabled': false},
              answer: 'К 1917 году в России действовали 31 кадетский корпус, включая Морской и Пажеский. ' +
                'Общее число кадет к 1917 году превышало 10 тысяч человек.'
            }
          ]
        },
        {
          name: 'Вопрос',
          id: 'page_3',
          disabled: {'disabled': false},
          stage: 1,
          questions: [
            {
              id: 'q3_1',
              text: 'Какие награды учредил И.В. Сталин?',
              points: 9,
              disabled: {'disabled': false},
              answer: 'Мало кто знает, что Сталин вернул нашей армии погон - символ воинской чести, учредил ' +
                'ордена Суворова, Кутузова и Александра Невского,  для военных моряков -ордена и медали, ' +
                'носившие имена Нахимова и Ушакова. Сталин учредил Орден Славы, который стал, фактически, ' +
                'точной копией Георгиевского креста – самой почетной военной награды Российской Императорской армии.'
            },
            {
              id: 'q3_2',
              text: 'Когда в СССР были возрождены традиции отечественного кадетского образования?',
              points: 10,
              disabled: {'disabled': false},
              answer: '17 апреля 1943 года на стол к Верховному Главнокомандующему  легло письмо, ' +
                'в котором предлагалось в виде опыта, создать один кадетский корпус в Москве.  ' +
                'Сталин одобрил эту идею, но с поправками. Своей рукой на проекте постановления ' +
                'СНК № 901 от 21 августа 1943 года он вывел: «назвать заведения Суворовскими училищами». ' +
                'И распорядился вместо одного открыть сразу девять училищ. Так, постановлением Совета ' +
                'Народных Комиссаров СССР № 901 от 21 августа 1943 года «О неотложных мерах по восстановлению ' +
                'хозяйства в районах, освобожденных от немецкой оккупации», в СССР были возрождены традиции ' +
                'отечественного кадетского образования, которые были забыты после революции 1917 года.'
            },
            {
              id: 'q3_3',
              text: 'Сколько первых  суворовских военных училищ, предусмотренных постановлением к созданию в ' +
                'период с 1 октября по 1 декабря 1943 г., было открыто в СССР и где?',
              points: 11,
              disabled: {'disabled': false},
              answer: 'Из первых 9 суворовских военных училищ, предусмотренных постановлением к созданию в ' +
                'период с 1 октября по 1 декабря 1943 г., 5 училищ (Новочеркасское, Воронежское, Курское, ' +
                'Калининское и Ставропольское) формировались в соответствующих их названию городах. Еще 4 училища ' +
                '(Краснодарское, Сталинградское, Харьковское, Орловское) в связи с отсутствием пригодной ' +
                'материальной базы временно создавались в городах Майкопе, Астрахани, Чугуеве, Ельце соответственно.'
            },
            {
              id: 'q3_4',
              text: 'Какие существенные изменения в программе обучения в суворовских училищах произошли в ' +
                '1957 г. после посещения Генеральным секретарем ЦК КПСС Н. С. Хрущевым Великобритании?',
              points: 12,
              disabled: {'disabled': false},
              answer: 'По его личному распоряжению в СВУ и НВМУ был введен расширенный до 2000 часов курс ' +
                'изучения иностранного языка, что привело к увеличению на год (11 лет) срока обучения в СВУ ' +
                'по сравнению со средними школами страны, обучавшими школьников по 10-летней программе. ' +
                'Выпускники СВУ и НВМУ, сдавшие выпускной экзамен по языку на "4" и "5" получили возможность ' +
                'сдачи экзаменов на диплом военного переводчика. Существенно расширялась программа обучения и ' +
                'по военной подготовке, что позволило выпускникам СВУ сразу же после окончания СВУ зачисляться ' +
                'без сдачи вступительных экзаменов на 2-й курс высших общевойсковых командных училищ.'
            }
          ]
        },
        {
          name: 'Вопрос',
          id: 'page_4',
          disabled: {'disabled': false},
          stage: 1,
          questions: [
            {
              id: 'q4_1',
              text: 'Сколько кадетских корпусов сегодня в составе Министерства обороны?',
              points: 13,
              disabled: {'disabled': false},
              answer: 'Сегодня в составе Министерства обороны действует 30 кадетских корпусов.'
            },
            {
              id: 'q4_2',
              text: 'Когда родился великий русский полководец А.В. Суворов?',
              points: 14,
              disabled: {'disabled': false},
              answer: '13 (24) ноября 1729 г. (или 1730 г.) родился выдающийся русский полководец, генералиссимус, ' +
                'граф Рымникский (1789), князь Италийский (1799) Александр Васильевич Суворов.'
            },
            {
              id: 'q4_3',
              text: 'Какие самые известные теоретические работы А.В. Суворова вы знаете?',
              points: 15,
              disabled: {'disabled': false},
              answer: 'Суворов является автором военно-теоретических работ «Полковое учреждение» и ' +
                '«Наука побеждать». Он создал оригинальную систему взглядов на способы ведения войны и ' +
                'боя, воспитания и обучения войск.'
            },
            {
              id: 'q4_4',
              text: 'Перечислите заслуги А.В. Суворова.',
              points: 16,
              disabled: {'disabled': false},
              answer: 'The usual weather is rainy and windy if a barometer shows the low pressure. ' +
                'Более 50 лет своей жизни Александр Суворов посвятил военной деятельности, участвовал в ' +
                'семи войнах, не зная поражений, провёл 60 сражений. Александр Васильевич был участником ' +
                'Семилетней войны. Во время русско-турецких войн (1768-1774 и 1787-1791) он одержал победы ' +
                'при Козлудже (1774), Кинбурне (1787), Фокшанах (1789), Рымнике (1789), штурмом овладел ' +
                'крепостью Измаил (1790).'
            }
          ]
        },
        {
          name: 'Вопрос',
          id: 'page_5',
          disabled: {'disabled': false},
          stage: 1,
          questions: [
            {
              id: 'q5_1',
              text: 'Как складывалась военная карьера великого полководца А.В. Суворова?',
              points: 17,
              disabled: {'disabled': false},
              answer: 'В 1742 г., по обычаю того времени, Суворова записали в лейб-гвардии Семёновский полк ' +
                'рядовым, а в семнадцать лет он начал действительную службу в чине капрала. Длинный перечень ' +
                'громких названий суворовских побед пополнился блестящими подвигами на швейцарских горных высотах. ' +
                'Благополучный исход всего предприятия стал венцом прижизненной славы Суворова. В октябре ' +
                '(ноябре) 1799 г. ему было присвоено высшее воинское звание — генералиссимус.'
            },
            {
              id: 'q5_2',
              text: 'Где и когда похоронен А.В. Суворов?',
              points: 18,
              disabled: {'disabled': false},
              answer: 'Александр Васильевич Суворов скончался 6 (18) мая 1800 г. и был похоронен в ' +
                'Александро-Невской лавре в Санкт-Петербурге.'
            },
            {
              id: 'q5_3',
              text: 'Суворовцы принимали участие в Параде Победы на Красной площади в 1945 году?',
              points: 19,
              disabled: {'disabled': false},
              answer: 'Ярким, запоминающимся событием в жизни суворовцев было участие в Параде Победы на Красной ' +
                'площади в Москве 24 июня 1945 года. Для участия в Параде было отобрано 210 суворовцев из трех ' +
                'старших рот, командиром батальона был назначен командир 1-й роты капитан Н. А. Едунов, его ' +
                'помощниками офицеры-воспитатели Ф. Н. Малахов, Т. Х. Саулко и В. Г. Перерешко.'
            },
            {
              id: 'q5_4',
              text: 'Кто командовал Парадом Победы в Москве?',
              points: 20,
              disabled: {'disabled': false},
              answer: 'Незабываемый день 24 июня - день Парада Победы. Сводный полк суворовцев в начале Парада ' +
                'стоял напротив Спасской башни Кремля, замыкая строй войск на Красной площади, слева стоял полк ' +
                'солдат с трофейными немецкими знаменами. Командовал Парадом Маршал Советского Союза ' +
                'К. К. Рокоссовский, принимал Парад Маршал Советского Союза Г.К.Жуков.'
            }
          ]
        },
        {
          name: 'Sports in Russia',
          id: 'page_6',
          disabled: {'disabled': false},
          stage: 2,
          questions: [
            {
              id: 'q6_1',
              text: 'What football team in Russia got a champion title of the country ten times?',
              points: 200,
              disabled: {'disabled': false},
              answer: 'It is "Spartak".'
            },
            {
              id: 'q6_2',
              text: 'When were the Olympic Games held in Russia?',
              points: 400,
              disabled: {'disabled': false},
              answer: 'The Olympic Games were held in Moscow in 1980.'
            },
            {
              id: 'q6_3',
              text: 'He is a three-time champion of the Olympic Games, a nine-time world champion, an eleven-time champion of Europe in Greco-Roman wrestling.',
              points: 600,
              disabled: {'disabled': false},
              answer: 'He is Alexander Karelin.'
            },
            {
              id: 'q6_4',
              text: 'What was the score of the football match between the national teams of Russia and France which was held in France in 1999?',
              points: 800,
              disabled: {'disabled': false},
              answer: 'The score was 3 to 2 in favour of Russia.'
            },
            {
              id: 'q6_5',
              text: 'His achievements are fantastic. More than 20 times he renewed his own records. He is the world and the Olympic champion and the world record-breaker in pole-vault.',
              points: 1000,
              disabled: {'disabled': false},
              answer: 'He is Sergei Bubka.'
            }
          ]
        },
        {
          name: 'Sports in Great Britain',
          id: 'page_7',
          disabled: {'disabled': false},
          stage: 2,
          questions: [
            {
              id: 'q7_1',
              text: 'Why are swimming, boating and sailing popular in Britain?',
              points: 200,
              disabled: {'disabled': false},
              answer: 'Swimming, boating and sailing are popular in Britain because Great Britain is an island state. There are many rivers and lakes in the country. The climate is mild.'
            },
            {
              id: 'q7_2',
              text: 'This kind of sport began to develop in Scotland and now it is widely spread all over Britain.',
              points: 400,
              disabled: {'disabled': false},
              answer: 'It was golf.'
            },
            {
              id: 'q7_3',
              text: 'What kind of British sports existed even in the Saxon times? 800 points. What game did the first settlers play on the board of the "Mayflower" in 1620?',
              points: 600,
              disabled: {'disabled': false},
              answer: 'It was boxing.'
            },
            {
              id: 'q7_4',
              text: 'What was the score of the football match between the national teams of Russia and France which was held in France in 1999?',
              points: 800,
              disabled: {'disabled': false},
              answer: 'The first settlers played darts on the board of the "Mayflower" in 1620.'
            },
            {
              id: 'q7_5',
              text: 'Why are the British not very much interested in skiing and skating?',
              points: 1000,
              disabled: {'disabled': false},
              answer: 'The climate is mild in Great Britain. There is not much snow on the ground in winter. Snow melts quickly.'
            }
          ]
        },
        {
          name: 'The Olympic Games',
          id: 'page_8',
          disabled: {'disabled': false},
          stage: 2,
          questions: [
            {
              id: 'q8_1',
              text: 'Where did the Olympic Games begin?',
              points: 200,
              disabled: {'disabled': false},
              answer: 'The Olympic Games began in ancient Greece.'
            },
            {
              id: 'q8_2',
              text: 'How often are the Olympic Games held?',
              points: 400,
              disabled: {'disabled': false},
              answer: 'The Olympic Games are held every fourth year.'
            },
            {
              id: 'q8_3',
              text: 'What committee organizes the Olympic Games?',
              points: 600,
              disabled: {'disabled': false},
              answer: 'The International Olympic Committee organizes the Olympic Games.'
            },
            {
              id: 'q8_4',
              text: 'In what city were the first modern Olympic Games held?',
              points: 800,
              disabled: {'disabled': false},
              answer: 'The first modern Olympic Games were held in Athens.'
            },
            {
              id: 'q8_5',
              text: 'Where is the International Olympic Committee situated?',
              points: 1000,
              disabled: {'disabled': false},
              answer: 'The International Olympic Committee is situated in Lausanne, Switzerland.'
            }
          ]
        },
        {
          name: 'Sports in America',
          id: 'page_9',
          disabled: {'disabled': false},
          stage: 2,
          questions: [
            {
              id: 'q9_1',
              text: 'What is the American equivalent for the word "athletic"?',
              points: 200,
              disabled: {'disabled': false},
              answer: 'The American equivalent for the word "athletic" is "track-and-field".'
            },
            {
              id: 'q9_2',
              text: 'What is the most popular sport in the USA?',
              points: 400,
              disabled: {'disabled': false},
              answer: 'The most popular sport in the USA is the American football.'
            },
            {
              id: 'q9_3',
              text: 'It is a game between two teams and is played on a field with a bat and a small white ball. Each team consists of nine players.',
              points: 600,
              disabled: {'disabled': false},
              answer: 'It\'s baseball.'
            },
            {
              id: 'q9_4',
              text: 'This game is played on a court with a large orange ball. There are five players in each team. The players can throw and pass the ball to each other. The team with the most quantity of points wins.',
              points: 800,
              disabled: {'disabled': false},
              answer: 'It\'s basketball.'
            },
            {
              id: 'q9_5',
              text: 'This game is very similar to baseball, but it is played with a larger ball. It is a popular sport among American women and co-ed (combined men and women) teams.',
              points: 1000,
              disabled: {'disabled': false},
              answer: 'It\'s softball.'
            }
          ]
        },
        {
          name: 'Sports in America',
          id: 'page_10',
          disabled: {'disabled': false},
          stage: 2,
          questions: [
            {
              id: 'q10_1',
              text: 'Name the game played between two teams of eleven players who kick a ball around a field trying to score a goal.',
              points: 200,
              disabled: {'disabled': false},
              answer: 'It\'s football.'
            },
            {
              id: 'q10_2',
              text: 'People played this game in England as early as 1550.',
              points: 400,
              disabled: {'disabled': false},
              answer: 'It\'s cricket.'
            },
            {
              id: 'q10_3',
              text: 'This game is played by two teams of 6 players each on an ice field.',
              points: 600,
              disabled: {'disabled': false},
              answer: 'It\'s ice hockey.'
            },
            {
              id: 'q10_4',
              text: 'It is a game of two players. Each of them starts with sixteen different playing pieces to move on a board, The aim is to move your pieces so that your opponent\'s king will be taken.',
              points: 800,
              disabled: {'disabled': false},
              answer: 'It\'s chess.'
            },
            {
              id: 'q10_5',
              text: 'This game was first played in England in 1872 and the first championship at Wimbledon was in 1877.',
              points: 1000,
              disabled: {'disabled': false},
              answer: 'It\'s tennis or lawn tennis.'
            }
          ]
        },
        {
          name: 'Final',
          id: 'page_11',
          disabled: {'disabled': false},
          stage: 3,
          questions: [
            {
              id: 'q11_1',
              text: 'What famous Italian artist invented some things in the field of medicine?',
              points: 10000,
              disabled: {'disabled': false},
              answer: 'It was Leonardo da Vinci.'
            }
          ]
        }
      ],
      questions: {
        page_1: [
          {
            id: 'q1_1',
            text: 'What dairy products do you know?',
            points: 100,
            disabled: {'disabled': false},
            answer: 'They are milk, butter, cheese, cream, sour cream, cottage cheese.'
          },
          {
            id: 'q1_2',
            text: 'What food is good for people’s health?',
            points: 200,
            disabled: {'disabled': false},
            answer: 'Fruit, vegetables, meat, cereals, fish, eggs, juices are good for health.'
          },
          {
            id: 'q1_3',
            text: 'What are the things that help us to keep fit?',
            points: 300,
            disabled: {'disabled': false},
            answer: 'They are: healthy food, clean water and air, physical activity, regular eating, quiet life. 400 points. Eyes, brain and the whole body can suffer from television and computer.'
          },
          {
            id: 'q1_4',
            text: 'Which parts of human body can suffer from television and computer?',
            points: 400,
            disabled: {'disabled': false},
            answer: ''
          },
          {
            id: 'q1_5',
            text: 'What antibiotic was discovered by Alexander Fleming in 1928?',
            points: 500,
            disabled: {'disabled': false},
            answer: 'It was Penicillin.'
          }
        ],
        page_2: [
          {
            id: 'q2_1',
            text: 'What forms of pollution do you know?',
            points: 100,
            disabled: {'disabled': false},
            answer: 'Water pollution, air pollution, nuclear pollution.'
          },
          {
            id: 'q2_2',
            text: 'What environmental problems can you name?',
            points: 200,
            disabled: {'disabled': false},
            answer: 'Pollution in its many forms; noise from cars, buses and planes; destruction of wildlife; shortage of natural resources; the growth of population.'
          },
          {
            id: 'q2_3',
            text: 'What does the word “environment” mean?',
            points: 300,
            disabled: {'disabled': false},
            answer: 'It means just everything surrounding us.'
          },
          {
            id: 'q2_4',
            text: 'Where does the air pollution in the cities come from mostly?',
            points: 400,
            disabled: {'disabled': false},
            answer: 'The air pollution comes from factories, plants power stations, cars and buses.'
          },
          {
            id: 'q2_5',
            text: 'Why are the nuclear power stations dangerous?',
            points: 500,
            disabled: {'disabled': false},
            answer: 'The nuclear power stations are dangerous because they can function wrong and cause the nuclear pollution.'
          }
        ],
        page_3: [
          {
            id: 'q3_1',
            text: 'What animals are found only in Australia?',
            points: 100,
            disabled: {'disabled': false},
            answer: 'Kangaroos and emus are found only in Australia.'
          },
          {
            id: 'q3_2',
            text: 'Why do people hunt Indian tigers?',
            points: 200,
            disabled: {'disabled': false},
            answer: 'People hunt the Indian tigers for fun, for their beautiful skin. Some people kill tigers to save their domestic animals and their lives.'
          },
          {
            id: 'q3_3',
            text: 'Where can we find the names of some animals, birds and fish which are disappearing nowadays?',
            points: 300,
            disabled: {'disabled': false},
            answer: 'We can find the names of some animals, birds and fishes which are disappearing nowadays in the Red Book.'
          },
          {
            id: 'q3_4',
            text: 'What animals were brought to Australia and became wild there?',
            points: 400,
            disabled: {'disabled': false},
            answer: 'Buffaloes and rabbits were brought to Australia and became wild there.'
          },
          {
            id: 'q3_5',
            text: 'Which of the following animals is endangered: a kangaroo, a bear, a raccoon, an orangutan or a groundhog?',
            points: 500,
            disabled: {'disabled': false},
            answer: 'Orangutan is endengered among these animals.'
          }
        ],
        page_4: [
          {
            id: 'q4_1',
            text: 'Name the profession of the people who collect the information about weather.',
            points: 100,
            disabled: {'disabled': false},
            answer: 'They are weathermen.'
          },
          {
            id: 'q4_2',
            text: 'Where do weathermen usually collect information about weather?',
            points: 200,
            disabled: {'disabled': false},
            answer: 'They collect information from ships, planes weather stations, and space stations.'
          },
          {
            id: 'q4_3',
            text: 'What is the usual weather if a barometer shows the high pressure in summer?',
            points: 300,
            disabled: {'disabled': false},
            answer: 'If a barometer shows the high pressure in summer it means misty mornings and hot sunny days in summer.'
          },
          {
            id: 'q4_4',
            text: 'What is the usual weather if a barometer shows the low pressure?',
            points: 400,
            disabled: {'disabled': false},
            answer: 'The usual weather is rainy and windy if a barometer shows the low pressure.'
          },
          {
            id: 'q4_5',
            text: 'People of what professions are interested in the weather forecast?',
            points: 500,
            disabled: {'disabled': false},
            answer: 'People of different professions are interested in the weather forecast: farmers, pilots, sailors, builders, drivers, etc.'
          }
        ],
        page_5: [
          {
            id: 'q5_1',
            text: 'What does the word “climate” mean?',
            points: 100,
            disabled: {'disabled': false},
            answer: 'Climate is the weather in a certain place for a long period of time.'
          },
          {
            id: 'q5_2',
            text: 'What and whom does a climate have a very important influence on?',
            points: 200,
            disabled: {'disabled': false},
            answer: 'Climate has a very important influence on plants, animals and humans.'
          },
          {
            id: 'q5_3',
            text: 'Why is the atmosphere becoming warmer?',
            points: 300,
            disabled: {'disabled': false},
            answer: 'People produce a lot of carbon dioxide. This gas Iets the heat get in, but it doesn\'t let much heat get out.'
          },
          {
            id: 'q5_4',
            text: 'Where does the carbon dioxide come from?',
            points: 400,
            disabled: {'disabled': false},
            answer: 'People and animals breathe out carbon dioxide. We produce carbon dioxide when we burn things. People cut down the trees which produce oxygen.'
          },
          {
            id: 'q5_5',
            text: 'How does the greenhouse effect work?',
            points: 500,
            disabled: {'disabled': false},
            answer: 'The sunlight gives us some heat. Some of the heat warms the atmosphere, and some of the heat goes back into the space. Nowadays the heat can\'t go back into the space and the temperatures in many places have become higher.'
          }
        ],
        page_6: [
          {
            id: 'q6_1',
            text: 'What football team in Russia got a champion title of the country ten times?',
            points: 200,
            disabled: {'disabled': false},
            answer: 'It is "Spartak".'
          },
          {
            id: 'q6_2',
            text: 'When were the Olympic Games held in Russia?',
            points: 400,
            disabled: {'disabled': false},
            answer: 'The Olympic Games were held in Moscow in 1980.'
          },
          {
            id: 'q6_3',
            text: 'He is a three-time champion of the Olympic Games, a nine-time world champion, an eleven-time champion of Europe in Greco-Roman wrestling.',
            points: 600,
            disabled: {'disabled': false},
            answer: 'He is Alexander Karelin.'
          },
          {
            id: 'q6_4',
            text: 'What was the score of the football match between the national teams of Russia and France which was held in France in 1999?',
            points: 800,
            disabled: {'disabled': false},
            answer: 'The score was 3 to 2 in favour of Russia.'
          },
          {
            id: 'q6_5',
            text: 'His achievements are fantastic. More than 20 times he renewed his own records. He is the world and the Olympic champion and the world record-breaker in pole-vault.',
            points: 1000,
            disabled: {'disabled': false},
            answer: 'He is Sergei Bubka.'
          }
        ],
        page_7: [
          {
            id: 'q7_1',
            text: 'Why are swimming, boating and sailing popular in Britain?',
            points: 200,
            disabled: {'disabled': false},
            answer: 'Swimming, boating and sailing are popular in Britain because Great Britain is an island state. There are many rivers and lakes in the country. The climate is mild.'
          },
          {
            id: 'q7_2',
            text: 'This kind of sport began to develop in Scotland and now it is widely spread all over Britain.',
            points: 400,
            disabled: {'disabled': false},
            answer: 'It was golf.'
          },
          {
            id: 'q7_3',
            text: 'What kind of British sports existed even in the Saxon times? 800 points. What game did the first settlers play on the board of the "Mayflower" in 1620?',
            points: 600,
            disabled: {'disabled': false},
            answer: 'It was boxing.'
          },
          {
            id: 'q7_4',
            text: 'What was the score of the football match between the national teams of Russia and France which was held in France in 1999?',
            points: 800,
            disabled: {'disabled': false},
            answer: 'The first settlers played darts on the board of the "Mayflower" in 1620.'
          },
          {
            id: 'q7_5',
            text: 'Why are the British not very much interested in skiing and skating?',
            points: 1000,
            disabled: {'disabled': false},
            answer: 'The climate is mild in Great Britain. There is not much snow on the ground in winter. Snow melts quickly.'
          }
        ],
        page_8: [
          {
            id: 'q8_1',
            text: 'Where did the Olympic Games begin?',
            points: 200,
            disabled: {'disabled': false},
            answer: 'The Olympic Games began in ancient Greece.'
          },
          {
            id: 'q8_2',
            text: 'How often are the Olympic Games held?',
            points: 400,
            disabled: {'disabled': false},
            answer: 'The Olympic Games are held every fourth year.'
          },
          {
            id: 'q8_3',
            text: 'What committee organizes the Olympic Games? 800 points. In what city were the first modern Olympic Games held?',
            points: 600,
            disabled: {'disabled': false},
            answer: 'The International Olympic Committee organizes the Olympic Games.'
          },
          // {
          //   id: 'q8_4',
          //   text: 'What was the score of the football match between the national teams of Russia and France which was held in France in 1999?',
          //   points: 800,
          //   disabled: {'disabled': false},
          //   answer: 'The first modern Olympic Games were held in Athens.'
          // },
          {
            id: 'q8_5',
            text: 'Where is the International Olympic Committee situated?',
            points: 1000,
            disabled: {'disabled': false},
            answer: 'The International Olympic Committee is situated in Lausanne, Switzerland.'
          }
        ],
        page_9: [
          {
            id: 'q9_1',
            text: 'What is the American equivalent for the word "athletic"?',
            points: 200,
            disabled: {'disabled': false},
            answer: 'The American equivalent for the word "athletic" is "track-and-field".'
          },
          {
            id: 'q9_2',
            text: 'What is the most popular sport in the USA?',
            points: 400,
            disabled: {'disabled': false},
            answer: 'The most popular sport in the USA is the American football.'
          },
          {
            id: 'q9_3',
            text: 'It is a game between two teams and is played on a field with a bat and a small white ball. Each team consists of nine players.',
            points: 600,
            disabled: {'disabled': false},
            answer: 'It\'s baseball.'
          },
          {
            id: 'q9_4',
            text: 'This game is played on a court with a large orange ball. There are five players in each team. The players can throw and pass the ball to each other. The team with the most quantity of points wins.',
            points: 800,
            disabled: {'disabled': false},
            answer: 'It\'s basketball.'
          },
          {
            id: 'q9_5',
            text: 'This game is very similar to baseball, but it is played with a larger ball. It is a popular sport among American women and co-ed (combined men and women) teams.',
            points: 1000,
            disabled: {'disabled': false},
            answer: 'It\'s softball.'
          }
        ],
        page_10: [
          {
            id: 'q10_1',
            text: 'Name the game played between two teams of eleven players who kick a ball around a field trying to score a goal.',
            points: 200,
            disabled: {'disabled': false},
            answer: 'It\'s football.'
          },
          {
            id: 'q10_2',
            text: 'People played this game in England as early as 1550.',
            points: 400,
            disabled: {'disabled': false},
            answer: 'It\'s cricket.'
          },
          {
            id: 'q10_3',
            text: 'This game is played by two teams of 6 players each on an ice field.',
            points: 600,
            disabled: {'disabled': false},
            answer: 'It\'s ice hockey.'
          },
          {
            id: 'q10_4',
            text: 'It is a game of two players. Each of them starts with sixteen different playing pieces to move on a board, The aim is to move your pieces so that your opponent\'s king will be taken.',
            points: 800,
            disabled: {'disabled': false},
            answer: 'It\'s chess.'
          },
          {
            id: 'q10_5',
            text: 'This game was first played in England in 1872 and the first championship at Wimbledon was in 1877.',
            points: 1000,
            disabled: {'disabled': false},
            answer: 'It\'s tennis or lawn tennis.'
          }
        ],
        page_11: [
          {
            id: 'q11_1',
            text: 'What famous Italian artist invented some things in the field of medicine?',
            points: 10000,
            disabled: {'disabled': false},
            answer: 'It was Leonardo da Vinci.'
          }
        ]
      },
      pageActive: {
        main: {
          'active': true
        },
        page_1: {
          'active': false
        },
        page_2: {
          'active': false
        },
        page_3: {
          'active': false
        },
        page_4: {
          'active': false
        },
        page_5: {
          'active': false
        },
        page_6: {
          'active': false
        },
        page_7: {
          'active': false
        },
        page_8: {
          'active': false
        },
        page_9: {
          'active': false
        },
        page_10: {
          'active': false
        },
        page_11: {
          'active': false
        }
      },
      stage: 1,
      maxStage: 1,
      stages: {
        1: {
          name: 'Каждый вопрос стоит 100 балов'
        },
        2: {
          name: 'stage two'
        },
        3: {
          name: 'final stage'
        }
      },
      message: 'Найдена незавершенная игра. Загрузить?',
      points: 100,
      team1: 0,
      aniTeam1: 0,
      team2: 0,
      aniTeam2: 0,
      complete: false,
      incomplete: false,
      started: false,
      stageComplete: false,
      answerTimeout: 5000,
      settingsVisible: false,
      settings: {
        team1: 'Команда 1',
        team2: 'Команда 2',
        timeout: 5
      },
      viewer: {
        visible: false,
        text: '',
        points: 0,
        team: '',
        answer: '',
        teamControls: true,
        showAnswerControls: false,
        answerControls: false,
        header: ''
      }
    }
  },
  computed: {
    isViewerVisible() {
      return this.viewer.visible
    },
    isTeamControlsVisible() {
      return this.viewer.teamControls
    },
    isAnswerControlsVisible() {
      return this.viewer.answerControls
    },
    isShowAnswerControlsVisible() {
      return this.viewer.showAnswerControls
    },
    animatedNumber1() {
      return this.aniTeam1.toFixed(0)
    },
    animatedNumber2() {
      return this.aniTeam2.toFixed(0)
    },
    winingTeam() {
      let str = 'DRAW'
      if (this.teams[0].score > this.teams[1].score) {
        str = this.teams[0].name
      }
      if (this.teams[0].score < this.teams[1].score) {
        str = this.teams[1].name
      }
      return str
    },
    endText() {
      return this.winingTeam !== 'DRAW' ? `Победила ${this.winingTeam}!` : `ПОБЕДИЛА ДРУЖБА!`
    },
    isIncomplete() {
      return this.incomplete
    }
  },
  watch: {
    teams: {
      handler: function (newValue) {
        this.team1 = newValue[0].score
        this.team2 = newValue[1].score
      },
      deep: true
    },
    team1: function (newValue) {
      TweenLite.to(this.$data, 0.5, {aniTeam1: newValue})
    },
    team2: function (newValue) {
      TweenLite.to(this.$data, 0.5, {aniTeam2: newValue})
    },
    questions: {
      handler: function (newValue) {
        for (let key of Object.keys(newValue)) {
          let arr = []
          for (let it of newValue[key]) {
            arr.push(it.disabled['disabled'])
          }
          for (let page of this.pages) {
            if (page.id === key) {
              page.disabled['disabled'] = arr.reduce((a, b) => a && b)
            }
          }
        }
      },
      deep: true
    },
    pages: {
      handler: function (newValue) {
        let arr = []
        for (let item of newValue) {
          let arr2 = []
          for (let q of item.questions) {
            arr2.push(q.disabled['disabled'])
          }
          item.disabled['disabled'] = arr2.reduce((a, b) => a && b)
          if (item.stage === this.stage) {
            arr.push(item.disabled['disabled'])
          }
        }
        if (arr.reduce((a, b) => a && b)) {
          if (this.stage <= this.maxStage) {
            this.stageComplete = true
          }
        }
      },
      deep: true
    },
    stage(newValue) {
      if (newValue > this.maxStage) {
        this.complete = true
      }
    }
  },
  async mounted() {
    await this.loadState()
  },
  methods: {
    pageNavigate(page) {
      for (let i of Object.keys(this.pageActive)) {
        this.pageActive[i]['active'] = false
      }
      this.pageActive[page]['active'] = true
    },
    showQuestion(val) {
      this.started = true
      if (!val.disabled['disabled']) {
        this.viewer.text = val.text
        this.viewer.points = val.points
        this.viewer.answer = val.answer
        this.viewer.header = `${this.getPage(val.id)} ${val.points}`
        this.viewer.showAnswerControls = false
        this.viewer.answerControls = false
        this.viewer.teamControls = true
        this.viewer.visible = true
        val.disabled['disabled'] = true
      }
    },
    applyPoints(team, points) {
      for (let t of this.teams) {
        if (t.id === team) {
          t.score += points
        }
      }
      this.viewerClose()
      // this.pageNavigate('main')
    },
    answerResolve(team) {
      this.viewer.team = team
      this.viewer.teamControls = false
      this.viewer.showAnswerControls = false
      this.viewer.answerControls = false
      let that = this
      setTimeout(function () {
        that.viewer.showAnswerControls = true
      }, this.answerTimeout)
    },
    viewerClose() {
      this.viewer.visible = false
      this.viewer.teamControls = true
      this.viewer.answerControls = false
      if (this.stageComplete) {
        if (this.stage < this.maxStage) {
          this.stage++
          this.stageComplete = false
        }
      }
      // this.pageNavigate('main')
      if (this.stage === this.maxStage && this.stageComplete) {
        this.complete = true
        localStorage.clear();
      }
      this.saveState()
    },
    getPage(val) {
      for (let item of Object.keys(this.questions)) {
        // tut
        for (let it of this.questions[item]) {
          if (val === it.id) {
            for (let page of this.pages) {
              if (page.id === item) {
                return page.name
              }
            }
          }
        }
      }
      return ''
    },
    handleShowAnswer() {
      this.viewer.text = this.viewer.answer
      this.viewer.showAnswerControls = false
      this.viewer.answerControls = true
    },
    async loadState(force) {
      const data = await JSON.parse(localStorage.getItem('jeopardy'))
      try {
        if (force) {
          this.pages = _.cloneDeep(data.pages)
          this.teams = _.cloneDeep(data.teams)
          this.complete = data.complete
          this.stage = data.stage
          this.stageComplete = data.stageComplete
          this.started = data.started
          this.answerTimeout = data.answerTimeout
          this.settings = _.cloneDeep(this.settings)
        } else {
          if (data.started && !data.complete) {
            this.incomplete = true
          }
        }
      } catch (e) {
        console.log(e.message)
      }
    },
    saveState() {
      localStorage.setItem('jeopardy', JSON.stringify({
        pages: _.cloneDeep(this.pages),
        teams: _.cloneDeep(this.teams),
        complete: this.complete,
        stage: this.stage,
        stageComplete: this.stageComplete,
        started: this.started,
        answerTimeout: this.answerTimeout,
        settings: _.cloneDeep(this.settings)
      }))
    },
    handleOk() {
      this.incomplete = false
      this.loadState(true)
    },
    handleCancel() {
      this.incomplete = false
    },
    handleSettingsSave() {
      this.answerTimeout = this.settings.timeout * 1000
      this.teams[0].name = this.settings.team1
      this.teams[1].name = this.settings.team2
      this.settingsVisible = false
    },
    handleSettingsCancel() {
      this.settingsVisible = false
    }
  }
})
