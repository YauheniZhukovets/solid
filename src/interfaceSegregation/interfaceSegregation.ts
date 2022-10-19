//мокове данные

let initialDate = {}
const createStore = (initialDate: any) => {
}

enum Route {
    ABOUT = 'about_page',
    HOME = 'home_page',
}

/*interface IRouter {
    parseUrl: (url: string) => void
    navigate: (route: Route) => void
    attachEventListener: () => void
    addQueryParams: (params: Record<string, string>) => void
    prepareUrlForClient: (url: string) => void
}*/

//нарушения принципа разделения интерфейса
/*class Router implements IRouter {
    parseUrl(url: string): void {
        //нужен на client and server
    }

    navigate(route: Route): void {
        //нужен на client
    }

    attachEventListener(): void {
        //нужен на client
    }

    addQueryParams(params: Record<string, string>): void {
        //нужен на client and server
    }

    prepareUrlForClient(url: string): void {
        //нужен на server
    }
}*/

interface IRouter {
    parseUrl: (url: string) => void
    addQueryParams: (params: Record<string, string>) => void
}

interface IClientRouter extends  IRouter {
    navigate: (route: Route) => void
    attachEventListener: () => void
}

interface IServerRouter extends  IRouter {
    prepareUrlForClient: (url: string) => void
}

class ServerRouter implements IServerRouter{
    addQueryParams(params: Record<string, string>): void {}
    parseUrl(url: string): void {}
    prepareUrlForClient(url: string): void {}
}

class ClientRouter implements IClientRouter{
    addQueryParams(params: Record<string, string>): void {}
    attachEventListener(): void {}
    navigate(route: Route): void {}
    parseUrl(url: string): void {}
}


const renderHtmlPage = (store: void, req: any) => {
    const router = new ServerRouter()
}


export const client = () => {
    const store = createStore(initialDate)
    const router = new ClientRouter()
}


export const server = (req: any, res: any) => {
    const store = createStore(initialDate)

    const htmlPage = renderHtmlPage(store, req)
}