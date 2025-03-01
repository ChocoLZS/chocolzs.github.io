type Project = {
  title: string
  description: string
  imgSrc?: string
  href: string
}

type ProjectsData = {
  [locale: string]: Project[]
}

const projectsData: ProjectsData = {
  en: [
    {
      title: 'Tweet Forwarding Bot',
      description: `Currently only supports X (Twitter) forwarding, can be forwarded to qq, bilibili, telegram these three platforms. Support local, Docker deployment.`,
      // imgSrc: '/static/images/google.png',
      href: 'https://github.com/idol-bbq-utils/idol-bbq-utils/',
    },
    // {
    //   title: 'The Time Machine',
    //   description: `Imagine being able to travel back in time or to the future. Simple turn the knob
    //     to the desired date and press "Go". No more worrying about lost keys or
    //     forgotten headphones with this simple yet affordable solution.`,
    //   imgSrc: '/static/images/time-machine.jpg',
    //   href: '/blog/the-time-machine',
    // },
  ],

  zh: [
    {
      title: '推文转发bot',
      description: `当前只支持X（Twitter）的转发，可转发至qq、bilibili、telegram这三个平台。支持本地、Docker部署。`,
      // imgSrc: '/static/images/google.png',
      href: 'https://github.com/idol-bbq-utils/idol-bbq-utils/',
    },
    // {
    //   title: 'La Machine à remonter le temps',
    //   description: `Imaginez pouvoir voyager dans le temps ou vers le futur. Tournez simplement le bouton
    //     à la date souhaitée et appuyez sur "Go". Ne vous inquiétez plus des clés perdues ou
    //     écouteurs oubliés avec cette solution simple mais abordable.`,
    //   imgSrc: '/static/images/time-machine.jpg',
    //   href: '/blog/the-time-machine',
    // },
  ],
}

export default projectsData
