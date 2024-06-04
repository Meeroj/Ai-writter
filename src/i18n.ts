import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import detector from 'i18next-browser-languagedetector';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    dashboard: {
      title: 'Title',
      login: 'Login',
      titleHint: 'Please, provide a title for your content.',
      description: 'Description',
      descriptionPlaceholder:
        'Write about ReactJS form validation. Provide a real life examples',
      descriptionHint: 'Please, provide a description for your content.',
      generate: 'Generate',
      profile: 'Profile',
      logout: 'Logout',
    },
    contentViewer: {
      copy: 'Copy',
      share: 'Share',
      edit: 'Edit',
    },
    homePage: {
      logo: 'AI Writer',
      dashboard: 'Dashboard',
      mainTitle: 'AI Writer Assistant: Your Ultimate Creative Sidekick!',
      subtitle:
        'Transforming Your Writing Experience with Cutting-Edge AI Support, Crafted to Inspire Brilliance and Boost Productivity.',
      heroButton: 'Go to the dashboard',
      investorsLogosTitle: 'Trusted by the world’s most innovative teams',
      deploySection: {
        supTitle: 'Deploy faster',
        title: 'Everything you need to deploy your app',
        subTitle:
          'Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum pulvinar et feugiat blandit at. In mi viverra elit nunc.',
        cards: {
          '1': {
            title: 'Push to deploy',
            content:
              'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
          },
          second: {
            title: 'SSL certificates',
            content:
              'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
          },
          third: {
            title: 'Simple queues',
            content:
              'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
          },
          fourth: {
            title: 'Advanced security',
            content:
              'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
          },
        },
      },
      footer: {
        reserved: 'AI Writing Assistant. All Rights Reserved.',
        legal: {
          title: 'LEGAL',
          first: 'Privacy Policy',
          second: 'Terms & Conditions',
        },
      },
      testimonials: {
        title:
          '“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”',
        name: 'Judith Black',
        job: 'CEO of Workcation',
      },
      pricing: {
        title: 'Simple no-tricks pricing',
        subtitle:
          'Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.',
        card: {
          title: 'Lifetime membership',
          subtitle:
            'Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis repellendus etur quidem assumenda.',
          included: {
            title: 'What’s included',
            first: 'Private forum access',
            second: 'Member resources',
            third: 'Entry to annual conference',
            fourth: 'Official member t-shirt',
            payTime: 'Pay once, own it forever',
            button: 'Get access',
            payTimeSubtitle:
              'Invoices and receipts available for easy company reimbursement',
          },
        },
      },
    },
  },
  uz: {
    dashboard: {
      title: 'Sarlavha',
      titleHint: 'Iltimos, kontent uchun sarlavha kiriting.',
      description: 'Tavsifi',
      descriptionPlaceholder:
        'ReactJS form validatsiyasi haqida yozing. Amaliy misollar taqdim eting',
      descriptionHint: 'Iltimos, kontent tavsifini yozing',
      generate: 'Yaratish',
      profile: 'Sahifa',
      logout: 'Chiqish',
    },
    contentViewer: {
      copy: 'Ko`chirish',
      share: 'Ulashish',
      edit: 'Tahrirlash',
    },
    homePage: {
      logo: 'SI YORDAMCHI',
      dashboard: 'Boshqaruv',
      login: 'Kirish',
      mainTitle: 'SI yardamchi: Sizning ajoyib ijodiy yordamchingiz!',
      subtitle:
        'Yorqinlikni ilhomlantirish va mahsuldorlikni oshirish uchun yaratilgan zamonaviy AI yordami bilan yozish tajribangizni o`zgartiring.',
      heroButton: 'Panelga o`ting',
      investorsLogosTitle:
        'Dunyoning eng innovatsion jamoalari tomonidan ishoniladi',
      deploySection: {
        supTitle: 'Tezroq quring',
        title: "Ilovangizni joylashtirish uchun kerak bo'lgan hamma narsa",
        subTitle:
          "Sizga kerak bo'ladigan barcha SI uskunalarni bir joyda jamladik Va biz buni sizga taqdim etishdan g'oyatda mamnunmiz",
        cards: {
          first: {
            title: 'Joylashtirish uchun bosing',
            content:
              "Sizning kontentlarininz uchun bepul bulut tizimini taqdim etamiz. bu bilan siz hech qachon kontentlarinizni yo'qotmaysiz",
          },
          second: {
            title: 'SSL Sertifikatlari',
            content:
              'Bizda barcha turdagi huquqlar bilan himoyalanganmiz va bunga bizning yetarlicha sertifikatlarimiz bor',
          },
          third: {
            title: 'Navbatlarsiz',
            content:
              "Siz o'z kontentingizni hech qancha kutmasdan yaratishingiz mumkin va bu sizga juda katta qulayluk beradi",
          },
          fourth: {
            title: 'Kengaygan xavfsizlik',
            content:
              "Sizning kontentlaringizni maxfiy tarzda saqlaymiz. Bu sizga sizning kontentlarningiz o'g'irlanishini oldini oladi",
          },
        },
      },
      testimonials: {
        title:
          '“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”',
        name: 'Judith Black',
        job: 'Bosh direktor',
      },
      pricing: {
        title: 'Hamyonbob narx',
        subtitle:
          'Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.',
        card: {
          title: 'Cheksiz obuna',
          subtitle:
            'Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis repellendus etur quidem assumenda.',
          included: {
            title: 'Nima kiritilgan ',
            first: 'Shaxsiy forumga kirish',
            second: 'Yillik konferentsiyaga kirish',
            third: "A'zolar resurslari",
            fourth: "Rasmiy a'zo futbolkasi",
            payTime: "Bir marta to'lang va cheksiz egalik qiling",
            button: 'Boshlash',
            payTimeSubtitle:
              "Hisob-fakturalar va kvitansiyalar kompaniya tomonidan oson to'lanishi mumkin",
          },
        },
      },
      footer: {
        logo: 'SI YORDAMCHI',
        link: 'SI yordamchi.',
        reserved: 'Barcha huquqlar himoyalangan..',
        legal: {
          title: 'HUQUQIY',
          first: 'Maxfiylik siyosati',
          second: 'Foydalanish shartlari',
        },
      },
    },
  },
};

i18n
  .use(detector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    fallbackLng: 'en',
    detection: {
      order: ['localStorage'],
    },
  });

export default i18n;
