import {EPages} from "@/types/types";

import pricesTowerImg1 from "@/public/Prices/tower/img1.png";
import pricesTowerImg2 from "@/public/Prices/tower/img2.png";
import pricesTowerImg3 from "@/public/Prices/tower/img3.png";

import pricesStairsImg1 from "@/public/Prices/stairs/img1.png";
import pricesStairsImg2 from "@/public/Prices/stairs/img2.png";
import pricesStairsImg3 from "@/public/Prices/stairs/img3.png";

import instTowerImage1 from "@/public/Instructions/towers/image1.png";
import instTowerImage2 from "@/public/Instructions/towers/image2.png";
import instTowerImage3 from "@/public/Instructions/towers/image3.png";
import instTowerImage4 from "@/public/Instructions/towers/image4.png";
import instTowerImage5 from "@/public/Instructions/towers/image5.png";

import instScaffoldingImage1 from "@/public/Instructions/scaffoldings/img1.jpg";
import instScaffoldingImage2 from "@/public/Instructions/scaffoldings/img2.jpg";
import instScaffoldingImage3 from "@/public/Instructions/scaffoldings/img3.jpg";
import instScaffoldingImage4 from "@/public/Instructions/scaffoldings/img4.jpg";
import instScaffoldingImage5 from "@/public/Instructions/scaffoldings/img5.jpg";
import instScaffoldingImage6 from "@/public/Instructions/scaffoldings/img6.jpg";

import instScaffoldImage1 from "@/public/Instructions/scaffolds/img1.png";
import instScaffoldImage2 from "@/public/Instructions/scaffolds/img2.png";
import instScaffoldImage3 from "@/public/Instructions/scaffolds/img3.png";

import towerImage from "@/public/NavLinks/tower.png";
import scaffoldImage from "@/public/NavLinks/scaffold.png";
import scaffoldingImage from "@/public/NavLinks/scaffolding.png";
import stairsImage from "@/public/NavLinks/stairs.png";

import benefitsImg1 from "@/public/Benefits/img1.svg";
import benefitsImg2 from "@/public/Benefits/img2.svg";
import benefitsImg3 from "@/public/Benefits/img3.svg";

import stairsDescriptionImg1 from "@/public/StairsDescription/img1.png";
import stairsDescriptionImg2 from "@/public/StairsDescription/img2.png";
import stairsDescriptionImg3 from "@/public/StairsDescription/img3.png";

import phoneIcon from "@/public/TopBar/phoneIcon.svg";
import mailIcon from "@/public/TopBar/mailIcon.svg";
import timeIcon from "@/public/TopBar/timeIcon.svg";

import scaffoldingDescriptionImg from "@/public/ScaffDescriptions/scaffolding.png";
import scaffoldDescriptionImg from "@/public/ScaffDescriptions/scaffold.png";

export const store = {
	navLinks: [
		{
			page: EPages.tower,
			title: "Аренда вышек",
			titleMobile: "Вышки",
			image: towerImage,
			linkHref: "/towers",
		},
		{
			page: EPages.stairs,
			title: "Аренда лестниц",
			titleMobile: "Лестницы",
			image: stairsImage,
			linkHref: "/stairs",
		},
		{
			page: EPages.scaffolding,
			title: "Аренда лесов",
			titleMobile: "Леса",
			image: scaffoldingImage,
			linkHref: "/scaffoldings",
		},
		{
			page: EPages.scaffold,
			title: "Аренда помостов",
			titleMobile: "Помосты",
			image: scaffoldImage,
			linkHref: "/scaffolds",
		},
	],
	benefits: [
		{
			image: benefitsImg1,
			title: "Оплата",
			text: "Наличный и безналичный расчет",
		},
		{
			image: benefitsImg2,
			title: "Доставка",
			text: "Можем помочь доставить",
		},
		{
			image: benefitsImg3,
			title: "Паспорт",
			text: "Оформление без залога. Только паспорт",
		},
	],
	topBarCards: [
		{
			href: "tel:+3753391619",
			image: phoneIcon,
			text: "+375 (33) 916 16 19",
		},
		{
			href: "mailto:gradovichnicolay@gmail.com",
			image: mailIcon,
			text: "gradovichnicolay@gmail.com",
		},
		{
			image: timeIcon,
			text: "Пн - Пт: 8:00 - 17:00",
		},
	],
	burgerMenuInfo: [
		{
			title: "Время работы:",
			text: "Пн - Пт: 8:00 - 17:00"
		},
		{
			title: "Телефон:",
			text: "+375 33 916 16 19",
			href: "tel: +375 33 916 16 19"
		},
		{
			title: "Адрес:",
			text: "д.Лесковка"
		},
		{
			title: "E-mail:",
			text: "gradovichnicolay@gmail.com",
			href: "mailto:gradovichnicolay@gmail.com"
		}
	],
	tower: {
		pageTitle: "", //Metadata
		headerLinks: [
			{
				url: "#prices",
				text: "Стоимость",
			},
			{
				url: "#specifications",
				text: "Характеристики",
			},
			{
				url: "#faq",
				text: "Вопросы",
			},
			{
				url: "#manual",
				text: "Инструкция сборки",
			},
			{
				url: "#contacts",
				text: "Контакты",
			},
		],
		mainScreenTitle: "Аренда строительной вышки туры в Минске",
		prices: {
			cards: [
				{
					title: "Вышка тура ВСР-1",
					description: "(рабочая площадка 0,7 на 1,6 метра)",
					image: pricesTowerImg1,
					prices: [
						{
							title: "До 5 м",
							pricesValue: [
								<p>
									<span>10</span> рублей / 1 сутки
								</p>,
								<p>
									<span>50</span> рублей / 7 дней
								</p>,
								<p>
									<span>100</span> рублей / 30 дней
								</p>,
							],
						},
						{
							title: "До 7,6 м",
							pricesValue: [
								<p>
									<span>12</span> рублей / 1 сутки
								</p>,
								<p>
									<span>60</span> рублей / 7 дней
								</p>,
								<p>
									<span>120</span> рублей / 30 дней
								</p>,
							],
						},
					],
					addInfo: ['Комплект для установки на лестничный марш +20%', 'Дополнительный настил +20%']
				},
				{
					title: "Вышка тура ВСР-4",
					description: "(рабочая площадка 1.2 на 2 метра)",
					image: pricesTowerImg2,
					prices: [
						{
							title: "До 5 м",
							pricesValue: [
								<p>
									<span>10</span> рублей / 1 сутки
								</p>,
								<p>
									<span>50</span> рублей / 7 дней
								</p>,
								<p>
									<span>120</span> рублей / 30 дней
								</p>,
							],
						},
						{
							title: "До 10 м",
							pricesValue: [
								<p>
									<span>12</span> рублей / 1 сутки
								</p>,
								<p>
									<span>60</span> рублей / 7 дней
								</p>,
								<p>
									<span>150</span> рублей / 30 дней
								</p>,
							],
						},
						{
							title: "До 15 м",
							pricesValue: [
								<p>
									<span>15</span> рублей / 1 сутки
								</p>,
								<p>
									<span>80</span> рублей / 7 дней
								</p>,
								<p>
									<span>190</span> рублей / 30 дней
								</p>,
							],
						},
						{
							title: "До 18,7, м",
							pricesValue: [
								<p>
									<span>20</span> рублей / 1 сутки
								</p>,
								<p>
									<span>100</span> рублей / 7 дней
								</p>,
								<p>
									<span>220</span> рублей / 30 дней
								</p>,
							],
						},
					],
					addInfo: ['Комплект для установки на лестничный марш +20%', 'Дополнительный комплект настилов +20%']
				},
				{
					title: "Вышка тура ВСР-7",
					description: "(рабочая площадка 2 на 2 метра)",
					image: pricesTowerImg3,
					prices: [
						{
							title: "До 5 м",
							pricesValue: [
								<p>
									<span>12</span> рублей / 1 сутки
								</p>,
								<p>
									<span>60</span> рублей / 7 дней
								</p>,
								<p>
									<span>150</span> рублей / 30 дней
								</p>,
							],
						},
						{
							title: "До 10 м",
							pricesValue: [
								<p>
									<span>15</span> рублей / 1 сутки
								</p>,
								<p>
									<span>80</span> рублей / 7 дней
								</p>,
								<p>
									<span>190</span> рублей / 30 дней
								</p>,
							],
						},
						{
							title: "До 15 м",
							pricesValue: [
								<p>
									<span>20</span> рублей / 1 сутки
								</p>,
								<p>
									<span>100</span> рублей / 7 дней
								</p>,
								<p>
									<span>240</span> рублей / 30 дней
								</p>,
							],
						},
						{
							title: "До 21 м",
							pricesValue: [
								<p>
									<span>25</span> рублей / 1 сутки
								</p>,
								<p>
									<span>125</span> рублей / 7 дней
								</p>,
								<p>
									<span>280</span> рублей / 30 дней
								</p>,
							],
						},
					],
					addInfo: ['Дополнительный комплект настилов +30%']
				},
			],
			ps: '* Минимальный срок аренды - 3 дня.'
		},
		firstTable: {
			title: "Технические характеристики вышки туры передвижной",
			tableData: {
				thead: [
					"Комплектация: база + секция",
					"Рабочая высота, м",
					"Общая высота, м",
					"Высота до настила, м",
					"Вес (ВСР-1), кг",
					"Вес (ВСР-4), кг",
					"Вес (ВСР-7), кг",
				],
				tbody: [
					["1 секция", "3,5", "2,7", "1,6", "77,6", "117,7", "142,9"],
					["2 секции", "4,7", "3,9", "2,8", "95,6", "141,9", "171,1"],
					["3 секции", "5,9", "5,1", "4,0", "113,6", "166,1", "199,3"],
					["4 секции", "7,2", "6,4", "5,3", "144", "190,3", "227,5"],
					["5 секций", "8,4", "7,6", "6,5", "162", "214,5", "255,7"],
					["6 секций", "9,6", "8.8", "7,7", "", "238,7", "283,9"],
					["7 секций", "10,8", "10,0", "8,9", "", "262,9", "312,1"],
					["8 секций", "12,1", "11,3", "10,2", "", "287,1", "340,3"],
					["9 секций", "13,3", "12,5", "10,2", "", "313,3", "368,5"],
					["10 секций", "14,6", "13,8", "12,7", "", "335,5", "396,7"],
					["11 секций", "15,8", "15,0", "13,9", "", "359,7", "424,"],
					["12 секций", "17,0", "16,2", "15,1", "", "383,9", "453,1"],
					["13 секций", "18,2", "17,4", "15,1", "", "408,1", "481,3"],
					["14 секций", "19,5", "18,7", "17,6", "", "432,3", "509,5"],
					["15 секций", "20,7", "19,9", "18,8", "", "", "537,7"],
					["16 секций", "21,8", "21,0", "20,9", "", "", "565,9"],
				],
			},
		},
		secondTable: {
			title: "Подробные технические характеристики вышки туры передвижной",
			tableData: {
				thead: [
					"Параметр",
					"Вышка тура ВСР-1",
					"Вышка тура ВСР-4",
					"Вышка тура ВСР-7",
				],
				tbody: [
					["Максимальная высота вышки, м", "7,6", "18,7", "21"],
					["Размеры рабочей площадки, м", "0,7х1,6", "1,2х2", "1,2х2"],
					["Максимальная нагрузка на вышку, кг", "250", "250", "250"],
					["Количество настилов, шт", "1", "2", "4"],
					["Высота секции вышки, м", "1,23", "1,23", "1,23"],
					[
						"Размер колесного основания в сборе, м",
						"0,84х2",
						"1,33х2,4",
						"2,13х2,4",
					],
				],
			},
		},
		thirdTable: {
			title: "Характеристики комплекта для установки на лестничный марш",
			tableData: {
				thead: [
					"Параметр",
					"Вышка тура ВСР-1",
					"Вышка тура ВСР-4",
				],
				tbody: [
					["Max высота регулировки, м", "1.0", "1,2"],
					["Min высота регулировки, м", "0.6", "0,5"],
					["Длина винтовой опоры, м", "0.5", "0,5"],
					["Длина полурамы, м", "0.7", "0,7"],
					["Диаметр винтовой опоры, мм", "38", "38"],
					["Ширина у основания, м", "0,9", "1,35"],
				],
			},
		},
		instructions: {
			title: "Инструкция по сборке вышки туры",
			content: [
				{
					text: "Монтаж вышки туры начинается с установки двухколесных балок. Вывернутые винтовые опоры ставим балки на ровную поверхность с замками внутрь параллельно друг другу. Сверху на стаканы базы прикладываем длинную объемную диагональ синего цвета. Обратите внимание на то, что эта деталь не вставляется в колесную базу, а именно прикладывается сверху.",
					image: instTowerImage1,
				},
				{
					text: "Далее вставляем лестницы секции через объемную диагональ длинными концами вниз, тем самым скрепляя предыдущие детали. Берем 4 стяжки желтого цвета, которые соединяют между собой лестницы и основание. Соединяем их между собой с помощью флажков замков последовательно по часовой стрелке. Теперь на лестнице основания надеваем гантели синего цвета и также закрепляем их между собой в той же последовательности с помощью желтых стяжек.",
					image: instTowerImage2,
					textAfterImage:
						"После того как мы собрали полностью первую секцию, необходимо слегка встряхнуть получившуюся конструкцию и такую манипуляцию нужно будет проделать каждой последующей секции, чтобы убедиться, что все соединения плотно сели на свои места.",
				},
				{
					text: "Теперь можно приступить к выравниванию туры по уровню с четырех сторон с помощью винтовых опор. На этом сборка первой части завершена. Теперь мы по такому же принципу можем продолжить монтаж последующих секций. На гантели синего цвета надеваем желтый рамы, крепим конструкции четырьмя стяжками, на этом моменте можно установить настил. Далее сверху снова установленных гантели и еще 4 стяжки. Когда все промежуточные секции готовы, у нас остаются детали красного цвета. Это секция ограждения. Берем лестницы ограждения и вставляем в гантели последней секции, также друг напротив друга. Далее берем 4 стяжки и закрепляем ими лестницы к гантелям предыдущий секции.\n",
					image: instTowerImage3,
				},
				{
					text: "На поперечные лестницы ограждения устанавливаем настил с люком и перекладину ограждения с помощью тех же флажковых соединений, к которым крепились стяжки. Устанавливаем гантели ограждения. Теперь осталось закрепить гантели. Для этого берем оставшийся 4 стяжки и соединяем ими гантели с лестницами. За счет расстояния между ступенями мы можем регулировать высоту установки настила каждые 40 сантиметров.\n",
					image: instTowerImage4,
				},
				{
					text: "Для обеспечения дополнительной устойчивости предусмотрена установка двух стабилизатора, которые рекомендуют устанавливать при высоте вышки более 6 метров. Cтабилизаторы крепится хомутами к основной конструкции вышки.\n",
					image: instTowerImage5,
				},
			]
		},
		firstVideo: {
			title: "Установка вышки туры ВСР",
			video: "https://www.youtube.com/embed/25IlYWRj0R0?si=WaDrmLxzwLdiCIap",
		},
		secondVideo: {
			title: "Комплект для установки на лестничный марш вышки туры",
			video: "https://www.youtube.com/embed/Nj_xApZx898?si=oroHGYBooskPJ6Hl",
		},
		thirdVideo: {
			title: "Техника безопасности при работе на высоте",
			video: "https://www.youtube.com/embed/Zqe_gmfkAfo?si=-_wlHaAkHkA8wdPf",
		},
		faq: [
			{
				question: "Почему именно вышка тура?",
				answer: "Большое разнообразие ремонтных, строительных работ проводится на высоте. Для этого создаются специальные устройства, обеспечивающие удобный доступ к отдельным участкам. Активно задействуется вышка тура передвижная, отличающиеся относительной простотой конструкции. Визуально они напоминают строительные леса, однако выгодно отличаются от последних гораздо большей мобильностью и простотой сборки. Если надо, то удастся собрать вышку в течение часа без привлечения большого количества работников, спецсредств.",
			},
			{
				question: "Какие преимущества аренды вышек тур?",
				answer: "Есть выбор разных размеров и высоты. Организована подача непосредственно на строительную площадку, к любому месту, где будут проводиться манипуляции. Иногда пользователи затрудняются назвать точно, какая модель им подходит в зависимости от функционала. Например, в узких пространствах целесообразно выбирать сборно-разборные аналоги, а монолитные не всегда могут вместиться в них. Целесообразно обращаться к специалистам прежде чем остановить выбор на аренде какого-то определённого вида.",
			},
			{
				question: "На сколько безопасны вышки?",
				answer: "Эти устройства являются максимально безопасными, поэтому учитывается структура поверхности, возможность зафиксировать стойки на требуемой высоте. Есть не менее популярные вышки-туры ВСР, имеющие небольшие колёса. Они способны поворачиваться вправо-влево либо под определённым углом, в некоторых случаях до 360. Это важное конструктивное решение, позволяющее обрабатывать конфигурацию пространства с многочисленными углами, выступами. Поворачивая вышку под нужным углом в разные стороны, удастся получить доступ к труднодоступным местам. Как видно, технические возможности действительно впечатляют, поэтому можно взять вышку туру напрокат для исполнения проектов разной сложности, срочности.",
			},
			{
				question: "Что нужно иметь при себе, для аренды вышки?",
				answer: "Чтобы взять в аренду вышку туру, при себе необходимо иметь ПАСПОРТ для заключения договора",
			},
			{
				question: "Возможна ли доставка?",
				answer: "К сожалению, собственной доставки у нас нет. Но это могут выполнить наши перевозчики.",
			},
			{
				question: "Как быть, когда минимальный срок аренды вышки больше, чем мне нужно?",
				answer: "Вы можете привести ее раньше положенного срока сдачи.",
			},
			{
				question: "Можно оплатить по факту?",
				answer: "К сожалению, оплата у нас происходит наперед.",
			},
			{
				question: "Можно ли продлить аренду стремянки?",
				answer: "Да, можно позвонить и предупредить по телефону, что не успели сделать в срок и продолжить пользоваться дальше. Только нужно будет произвести оплату через ЕРИП. ",
			},
			{
				question: "Как оплатить за продление?",
				answer: "Самый простой способ – оплатить через ЕРИП. Можно оплатить в любом инфокиоске, через интернет банкинг, почту, банк.",
			},
			{
				question: "может ли мой знакомый привезти вышку вместо меня?",
				answer: "Да, конечно.",
			},
			{
				question: "Нужно ли оставлять залог, при аренде передвижной туры?",
				answer: "Нет. Договор заключается без залоговой стоимость. Можем попросить залог только в том случае, если человек приехал с большим количеством задолженностей по исполнительным документам.",
			},
			{
				question: "Какие документы нужно иметь юр. лицу, при аренде вышки?",
				answer: "Нужно иметь подписанные документы: - договор - счет - акт приема передачи или иметь доверенность.",
			},
		],
	},
	stairs: {
		pageTitle: "", //Metadata
		headerLinks: [
			{
				url: "#prices",
				text: "Стоимость",
			},
			{
				url: "#specifications",
				text: "Характеристики",
			},
			{
				url: "#faq",
				text: "Вопросы",
			},
			{
				url: "#contacts",
				text: "Контакты",
			},
		],
		mainScreenTitle: "Аренда строительных лестниц в Минске",
		prices: {
			cards: [
				{
					title: "Стремянка алюминиевая",
					image: pricesStairsImg1,
					prices: [
						{
							title: "3 ступ.",
							altTitle: 'Ам703',
							pricesValue: [
								<p>
									<span>3</span> рублей / 1 сутки
								</p>,
								<p>
									<span>25</span> рублей / 7 дней
								</p>,
								<p>
									<span>50</span> рублей / 30 дней
								</p>,
							],
						},
						{
							title: "4 ступ.",
							altTitle: 'Ам704',
							pricesValue: [
								<p>
									<span>4</span> рублей / 1 сутки
								</p>,
								<p>
									<span>25</span> рублей / 7 дней
								</p>,
								<p>
									<span>50</span> рублей / 30 дней
								</p>,
							],
						},
						{
							title: "5 ступ.",
							altTitle: 'Ам705',
							pricesValue: [
								<p>
									<span>5</span> рублей / 1 сутки
								</p>,
								<p>
									<span>25</span> рублей / 7 дней
								</p>,
								<p>
									<span>50</span> рублей / 30 дней
								</p>,
							],
						},
						{
							title: "8 ступ.",
							altTitle: 'Ам708',
							pricesValue: [
								<p>
									<span>8</span> рублей / 1 сутки
								</p>,
								<p>
									<span>25</span> рублей / 7 дней
								</p>,
								<p>
									<span>50</span> рублей / 30 дней
								</p>,
							],
						},
					],
				},
				{
					title: "Лестница алюминиевая 3-х секционная",
					image: pricesStairsImg2,
					prices: [
						{
							title: "3*6 ступ.",
							altTitle: 'арт. 5306',
							pricesValue: [
								<p>
									<span>8</span> рублей / 1 сутки
								</p>,
								<p>
									<span>25</span> рублей / 7 дней
								</p>,
								<p>
									<span>50</span> рублей / 30 дней
								</p>,
							],
						},
						{
							title: "3*8 ступ.",
							altTitle: 'арт. 5308',
							pricesValue: [
								<p>
									<span>8</span> рублей / 1 сутки
								</p>,
								<p>
									<span>25</span> рублей / 7 дней
								</p>,
								<p>
									<span>50</span> рублей / 30 дней
								</p>,
							],
						},
						{
							title: "3*10 ступ.",
							altTitle: 'арт. 5310',
							pricesValue: [
								<p>
									<span>10</span> рублей / 1 сутки
								</p>,
								<p>
									<span>50</span> рублей / 7 дней
								</p>,
								<p>
									<span>100</span> рублей / 30 дней
								</p>,
							],
						},
						{
							title: "3*12 ступ.",
							altTitle: 'арт. 5312',
							pricesValue: [
								<p>
									<span>10</span> рублей / 1 сутки
								</p>,
								<p>
									<span>50</span> рублей / 7 дней
								</p>,
								<p>
									<span>100</span> рублей / 30 дней
								</p>,
							],
						},
						{
							title: "3*14 ступ.",
							altTitle: 'арт. 5314',
							pricesValue: [
								<p>
									<span>10</span> рублей / 1 сутки
								</p>,
								<p>
									<span>50</span> рублей / 7 дней
								</p>,
								<p>
									<span>100</span> рублей / 30 дней
								</p>,
							],
						},
					],
				},
				{
					title: "Лестница шарнирная 4-х секционная",
					image: pricesStairsImg3,
					prices: [
						{
							title: "4*3 ступ.",
							altTitle: 'Т433',
							pricesValue: [
								<p>
									<span>10</span> рублей / 1 сутки
								</p>,
								<p>
									<span>50</span> рублей / 7 дней
								</p>,
								<p>
									<span>100</span> рублей / 30 дней
								</p>,
							],
						},
						{
							title: "4*5 ступ.",
							altTitle: 'Т455',
							pricesValue: [
								<p>
									<span>10</span> рублей / 1 сутки
								</p>,
								<p>
									<span>50</span> рублей / 7 дней
								</p>,
								<p>
									<span>100</span> рублей / 30 дней
								</p>,
							],
						},
					],
				},
			],
			ps: '* Минимальная сумма для заключения договора - 20 рублей.'
		},
		description: [
			{
				title: "Стремянка алюминиевая",
				description: [
					"Многоцелевые конструкции с односторонним вхождением.",
					"Легко раскладываются.",
					"Имеют небольшой вес.",
					"Устойчивость обеспечивают заглушки на ножках и ступени с глубоким рифлением. Предназначены для работы в помещениях и на открытых пространствах.",
				],
				table: {
					thead: ["Параметр", "Ам703", "Ам704", "Ам705", "Ам708"],
					tbody: [
						["Кол-во ступеней", "3", "4", "5", "8"],
						["Высота, м", "0,6", "0,82", "1,03", "1,66"],
						["Длина, м", "1,3", "1,53", "1,75", "2,44"],
						["Высота (max), м", "2,7", "2,9", "3,1", "3,7"],
						["Ширина, см", "42", "44", "46", "54"],
						["Вес, кг", "2,8", "3,3", "3,8", "5,9"],
					],
				},
				image: stairsDescriptionImg1,
				passportUrl: '/assets/stairs/alumet-passport-seria-AM.pdf',
			},
			{
				title: <span>Лестница алюминиевая <br/>3-х секционная</span>,
				description: [
					"Универсальные конструкции с раздвижными элементами.",
					"Секции фиксируются ремнями безопасности для защиты от непредвиденного складывания.",
					"Могут принимать вид Л-образной стремянки. ",
					"Верхнюю секцию можно использовать как отдельную приставную лестницу. ",
					"Предусмотрены пластиковые ребристые накладки в местах прилегания к поверхности.",
					"Устойчивость обеспечивает траверса с противоскользящими резиновыми наконечниками.",
				],
				table: {
					thead: [
						"Параметр",
						"арт. 5306",
						"арт. 5308",
						"арт. 5310",
						"арт. 5312",
						"арт. 5314",
					],
					tbody: [
						["Кол-во ступеней", "3х6", "3х8", "3х10", "3х12", "3х14"],
						[
							"Длина в сложенном виде(min), м",
							"1,68",
							"2,24",
							"2,82",
							"3,38",
							"3,94",
						],
						[
							"Высота стремянки с выдвинутой 3 секцией, м",
							"2,51",
							"3,63",
							"4,76",
							"5,60",
							"6,74",
						],
						[
							"Общая длина лестницы (max), м",
							"3,36",
							"5,04",
							"6,46",
							"7,86",
							"9,54",
						],
						[
							"Ширина лестниц, см",
							"33,5/39,2/44,5",
							"33,5/39,2/44,5",
							"33,5/39,2/44,5",
							"33,5/39,2/44,5",
							"33/39/44",
						],
						["Ширина основания (траверсы), см", "70", "80", "90", "100", "100"],
						["Вес, кг", "7,80", "10,70", "14,30", "17,50", "20,30"],
					],
				},
				image: stairsDescriptionImg2,
				passportUrl: '/assets/stairs/alumet-passport-seria-H3-HS3.pdf',
			},
			{
				title: <span>Лестница алюминиевая <br/>4-х секционная</span>,
				description: [
					"Состоит из четырех секций с 3-мя и более ступенями в зависимости от модели.",
					"Имеет расширенные ступени с покрытием из рифленого алюминия.",
					"Устойчивость обеспечивают противоскользящие прорезиненные накладки. ",
					"Оснащены механизмом от произвольного складывания.",
					"Оборудование может трансформироваться в двухстороннюю стремянку, приставную и Г-образную лестницу, подмост.",
				],
				table: {
					thead: ["Параметр", "Т433", "Т455"],
					tbody: [
						["Кол-во ступеней", "4х3", "4х5"],
						["Высота одной секции, м", "0,94", "1,5"],
						["Длина двух секций, м", "1,78", "2,91"],
						["Общая длина лестницы, м", "3,48", "5,78"],
						["Ширина основания (траверсы), см", "70", "80"],
						["Вес, кг", "12,9", "16,8"],
					],
				},
				image: stairsDescriptionImg3,
				passportUrl: '/assets/stairs/alumet-passport-seria-T4.pdf',
			},
		],
		firstVideo: {
			title: "Техника безопасности при работе на высоте",
			video: "https://www.youtube.com/embed/Zqe_gmfkAfo?si=-_wlHaAkHkA8wdPf",
		},
		faq: [
			{
				question: "Возможна ли доставка?",
				answer: "К сожалению, собственной доставки у нас нет. Но это могут выполнить наши перевозчики.",
			},
			{
				question: "Что нужно иметь при себе, чтобы арендовать лестницу?",
				answer: "Чтобы взять лестницу на прокат, вам нужно иметь при себе паспорт для заключения договора и деньги.",
			},
			{
				question: "Как быть, когда минимальный срок аренды больше, чем мне нужно?",
				answer: "Вы можете привести ее раньше положенного срока сдачи.",
			},
			{
				question: "Можно ли оплатить по факту?",
				answer: "К сожалению, оплата у нас происходит наперед.",
			},
			{
				question: "Можно ли продлить аренду стремянки?",
				answer: "Да, можно позвонить и предупредить по телефону, что не успели сделать в срок и продолжить пользоваться дальше. Только нужно будет произвести оплату через ЕРИП. ",
			},
			{
				question: "Как оплатить за продление аренды?",
				answer: "Самый простой способ – оплатить через ЕРИП. Можно оплатить в любом инфокиоске, через интернет банкинг, почту, банк.",
			},
			{
				question: "Могу ли я передать лестницу через моего знакомого?",
				answer: "Конечно, можете.",
			},
			{
				question: "Нужно ли оставлять залог, при аренде лестницы?",
				answer: "Нет. Договор заключается без залоговой стоимости. Можем попросить залог только в том" +
					" случае, если человек приехал с большим количеством задолженностей по исполнительным документам.",
			},
			{
				question: "Какой самой длинной лестницы возможна аренда?",
				answer: "Мы можем предложить в аренду лестницу длиной 10 метров.",
			},
			{
				question: "Какие документы нужно иметь юр. лицу, чтобы взять лестницу на прокат?",
				answer: "Нужно иметь подписанные документы: - договор - счет - акт приема передачи или иметь доверенность.",
			},
		],
	},
	scaffold: {
		pageTitle: "",
		headerLinks: [
			{
				url: "#specifications",
				text: "Характеристики",
			},
			{
				url: "#prices",
				text: "Стоимость",
			},
			{
				url: "#faq",
				text: "Вопросы",
			},
			{
				url: "#manual",
				text: "Инструкция сборки",
			},
			{
				url: "#contacts",
				text: "Контакты",
			},
		],
		mainScreenTitle: "Аренда строительных помостов в Минске",
		pagesLinks: {
			title: "Аренда помостов",
			image: scaffoldImage,
			linkHref: "/scaffolds",
		},
		faq: [
			{
				question: "Возможна ли доставка?",
				answer: "К сожалению, собственной доставки у нас нет. Но это могут выполнить наши перевозчики.",
			},
			{
				question: "Что нужно иметь при себе, чтобы арендовать помост?",
				answer: "Чтобы взять помост ПМ-200 в прокат, вам нужно иметь при себе паспорт для заключения договора и деньги.",
			},
			{
				question: "Что делать, если минимальный срок аренды помоста больше необходимого?",
				answer: "Вы можете привести ее раньше положенного срока сдачи.",
			},
			{
				question: "Можно ли оплатить по факту?",
				answer: "К сожалению, оплата у нас происходит наперед.",
			},
			{
				question: "Можно ли продлить аренду помоста?",
				answer: "Да, можно позвонить и предупредить по телефону, что не успели сделать в срок и продолжить пользоваться дальше. Только нужно будет произвести оплату через ЕРИП.",
			},
			{
				question: "Как оплатить за продление аренды?",
				answer: "Самый простой способ – оплатить через ЕРИП. Можно оплатить в любом инфокиоске, через интернет банкинг, почту, банк.",
			},
			{
				question: "Может ли мой знакомый привезти помост вместо меня?",
				answer: "Да, конечно.",
			},
			{
				question: "Нужно ли оставлять залог, при аренде помоста?",
				answer: "Нет. Договор заключается без залоговой стоимость. Можем попросить залог только в том случае, если человек приехал с большим количеством задолженностей по исполнительным документам.",
			},
			{
				question: "Какие документы нужно иметь юр. лицу, чтобы взять помост на прокат?",
				answer: "Нужно иметь подписанные документы: - договор - счет - акт приема передачи или иметь доверенность.",
			},
		],
		instructions: {
			title: "Инструкция по сборке помоста",
			content: [
				{
					text: "Установить лестницу добора (1) и лестницу с колесом (2) на ровную поверхность на ширине" +
						" 1,6 метров друг от друга.",
					image: instScaffoldImage1,
				},
				{
					text: "Закрепить лестницы помоста короткими горизонтальными (3) и длинными диагональными (4)" +
						" стяжками.",
					image: instScaffoldImage2,
				},
				{
					text: "Установить настил с люком (5) на необходимой для работы, но на высоте не более 1,25 м." +
						" Помост готов к работе.",
					image: instScaffoldImage3,
				},
			]
		},
		description: {
			img: scaffoldDescriptionImg,
			title: "Помост ПМ-200",
			listData: [
				"высокая скорость сборки и установки",
				"удобное хранение и транспортировку",
				"долговечность и безопасность",
			],
		},
		firstVideo: {
			title: "Техника безопасности при работе на высоте",
			video: "https://www.youtube.com/embed/Zqe_gmfkAfo?si=-_wlHaAkHkA8wdPf",
		},
	},
	scaffolding: {
		pageTitle: "",
		headerLinks: [
			{
				url: "#prices",
				text: "Стоимость",
			},
			{
				url: "#specifications",
				text: "Комплектация",
			},
			{
				url: "#faq",
				text: "Вопросы",
			},
			{
				url: "#manual",
				text: "Инструкция сборки",
			},
			{
				url: "#contacts",
				text: "Контакты",
			},
		],
		mainScreenTitle: "Аренда строительных лесов в Минске",
		pagesLinks: {
			title: "Аренда лесов",
			image: scaffoldingImage,
			linkHref: "/scaffoldings",
		},
		description: {
			img: scaffoldingDescriptionImg,
			title: "Леса строительные ЛРСП-40",
			list: [
				"работы на высоте до 40 метров",
				"быстрый монтаж и демонтаж ",
				"высокая надёжность",
				"для любых видов строительных работ",
				"возможность установки на участках с разными уровнями по высоте",
			],
		},
		docs: [
			{
				docName: "Инструкция эксплуатации (PDF)",
				docUrl: "/assets/scaffoldings/instruktsiia-po-ekspluatatsii-lrsp-40.pdf",
			},
			{
				docName: "Сертификат (PDF)",
				docUrl: "/assets/scaffoldings/lesa-ramnye-stroitelnye2.pdf",
			},
		],
		prices: [
			{
				typeTitle: "Стоимость по секциям:",
				pricesCards: [
					{
						title: "1 секция",
						prices: [
							"1 сутки – 10 руб",
							"7 суток – 35 руб",
							"30 суток – 45 руб",
						],
					},
					{
						title: "2 секции",
						prices: [
							"1 сутки – 10 руб",
							"7 суток – 40 руб",
							"30 суток – 55 руб",
						],
					},
					{
						title: "3 секции",
						prices: [
							"1 сутки – 12 руб",
							"7 суток – 45 руб",
							"30 суток – 70 руб",
						],
					},
				],
			},
			{
				typeTitle: "Стоимость по кв.метрам:",
				pricesCards: [
					{
						title: "до 30 кв.м.",
						prices: [
							"1 сутки – 15 руб",
							"7 суток – 60 руб",
							"30 суток – 100 руб",
						],
					},
					{
						title: "до 50 кв.м.",
						prices: [
							"1 сутки – 20 руб",
							"7 суток – 80 руб",
							"30 суток – 150 руб",
						],
					},
					{
						title: "до 100 кв.м.",
						prices: [
							"1 сутки – 30 руб",
							"7 суток – 110 руб",
							"30 суток – 240 руб",
						],
					},
				],
			},
		],
		table: {
			title: "Технические характеристики строительных лесов",
			tableData: {
				tbody: [
					["Высота яруса лесов,м", "2"],
					["Шаг секции вдоль стены,м", "3"],
					["Ширина яруса,м", "1"],
					["Нагрузка,кгс", "200"],
					["Максимальная высота лесов, м", "40"],
					["Вес секции лесов,кг", "28"],
					["Материал рамы", "Стальная труба d.42мм толщина стенки 1,5мм"],
					["Материал связей", "Стальная труба d. 25мм"],
				],
			},
		},
		instructions: {
			title: "Инструкция по сборке лесов",
			content: [
				{
					text: "Строительные леса, которые вы взяли на прокат, собираются на ровной и твердой поверхности." +
						" При монтаже, рамы строительных лесов должны быть исключительно в одной горизонтальной" +
						" плоскости и на одинаковом расстоянии от боковой поверхность, чтобы можно было установить" +
						" кронштейны к стене.",
					image: instScaffoldingImage1,
				},
				{
					text: "Рамные леса мы собираем по секциям. Одна секция строительных лесов, которые мы сдаем в" +
						" аренду в Минске, составляет 2 м. в высоту, 3 м. в высоту, и 1 м. в глубину.  Для того," +
						" чтобы одна секция лесов была собрана, нам нужно скрепить раму с лестницей и раму проходную" +
						" с помощью связи диагональной и связи горизонтальной с помощью флажковых замков на рамах." +
						" Далее устанавливаем опоры простые на каждую из секций, чтобы было больше давления на" +
						" площадку.",
					image: instScaffoldingImage2,
				},
				{
					text: "После того, как собрали одну секцию, начинаем собирать следующие две в той же" +
						" последовательности. Далее устанавливаем по два ригеля на каждую секцию, как изображено на" +
						" картинке.",
					image: instScaffoldingImage3,
				},
				{
					text: "На ригеля кладем 3 настила размером 1 на 1 метр. Настилы изготавливаются по специальной" +
						" технологии и делаются так, чтобы настил не соскочил с ригеля. Максимальный вес, на который" +
						" рассчитана одна секция, является 200 килограмм. Если нужно увеличить вес до 300 килограмм," +
						" то нужно установить 3 ригеля на одну секцию. Поэтому просим учесть эту информацию, когда" +
						" решите взять строительные леса в аренду, чтобы мы правильно рассчитали количество" +
						" необходимых элементов.",
					image: instScaffoldingImage4,
				},
				{
					text: "Когда первый ярус готов, начинаем собирать второй. Одну раму вставляем в вторую, точнее" +
						" нижнюю. И собираем до той высоты, которая нам нужна. По аналогии, все рамы фиксируем с" +
						" помощью связи диагональной и связи горизонтальной. Начиная со второго яруса, леса" +
						" закрепляем специальными кронштейнами, которые идут в комплекте, в шахматном порядке, как" +
						" изображено на картинке выше. При прокате строительных лесов наши специалисты подберут" +
						" необходимое количество кронштейнов. Если нужно увеличить высоту на одну или несколько" +
						" ярус, то кладем ригеля, настилы и начинаем собирать в той же последовательности, как" +
						" второй ярус.",
					image: instScaffoldingImage5,
				},
				{
					text: "По схеме установке лесов, которая изображена в инструкции по эксплуатации, связи" +
						" диагональные и связи горизонтальные чередуются в шахматном порядке. Но для того, чтобы" +
						" придать конструкции большую жесткость, мы предлагаем на каждую секцию устанавливать одну" +
						" связь диагональную и одну связь горизонтальную. Такой тип конструкции больше актуален," +
						" когда мы собираем узкий участок фасада и нам нужна большая высота, допустим 12 м. высотой" +
						" и 6 м. шириной. Разбираем в обратной последовательности как собирали, начиняя с верхнего" +
						" яруса.",
					image: instScaffoldingImage6,
				},
			]
		},
		firstVideo: {
			title: "Сборка строительных лесов ЛРСП-40",
			video: "https://www.youtube.com/embed/TN7Jasg0e28?si=afzwPWY51XjsuGT4",
		},
		secondVideo: {
			title: "Техника безопасности при работе на высоте",
			video: "https://www.youtube.com/embed/Zqe_gmfkAfo?si=-_wlHaAkHkA8wdPf",
		},
		faq: [
			{
				question: "Возможна ли доставка?",
				answer: "К сожалению, собственной доставки у нас нет. Но это могут выполнить наши перевозчики.",
			},
			{
				question: "Что нужно иметь при себе, при аренде лесов строительных?",
				answer: "Чтобы взять в прокат строительные леса, вам нужно иметь при себе паспорт для заключения договора и деньги.",
			},
			{
				question: "Как быть, когда минимальный срок аренды больше, чем мне нужно?",
				answer: "Вы можете привести леса раньше положенного срока сдачи.",
			},
			{
				question: "Можно ли оплатить по факту?",
				answer: "К сожалению, оплата у нас происходит наперед.",
			},
			{
				question: "Можно ли продлить аренду лесов?",
				answer: "Да, можно позвонить и предупредить по телефону, что не успели сделать в срок и продолжаем пользоваться дальше.",
			},
			{
				question: "Как оплатить за продление?",
				answer: "Самый простой способ – оплатить через ЕРИП. Можно оплатить в любом инфокиоске, через интернет банкинг, почту, банк. ",
			},
			{
				question: "Возможен ли возврат лесов через знакомого?",
				answer: "Конечно, главное, чтобы вернули в полной комплектации. ",
			},
			{
				question: "Нужно ли оставлять залог, при аренде лесов строительных?",
				answer: "Нет. Договор заключается без залоговой стоимость. Может попросить залог только в том случае, если человек приехал с большим количеством задолженностей по исполнительным документам.",
			},
			{
				question: "Какие документы нужно иметь юр. лицу, чтобы арендовать леса?",
				answer: "Нужно иметь подписанные документы: - договор - счет - акт приема передачи или иметь доверенность.",
			},
		],


	},
	not_found_page: {
		headerLinks: [
			{
				url: "/towers",
				text: "Аренда вышек",
			},
			{
				url: "/stairs",
				text: "Аренда стремянок",
			},
			{
				url: "/scaffoldings",
				text: "Аренда лесов",
			},
			{
				url: "/scaffolds",
				text: "Аренда помостов",
			},
		],
	}
}
