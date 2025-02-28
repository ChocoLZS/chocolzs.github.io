declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_LANG: string
      NEXT_PUBLIC_DEPLOY_LOC: 'home' | 'github' | 'seaside'
      NEXT_PUBLIC_SITE_URL: string
    }
  }
}

export {}
