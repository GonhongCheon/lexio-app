import { EmptyObject } from '@/types';

interface Storage {
    namespace: string;
    data: EmptyObject;

    get: <T>(key: string) => T | unknown;
    set: <T>(key: string, value: T | unknown) => void;
}

export default class LocalStorage implements Storage {
    namespace;
    data = {} as EmptyObject;

    constructor(namespace = '') {
        this.namespace = namespace;
    }

    get<T>(key: string) {
        if (!this.data[key] && window?.localStorage) {
            const item = window.localStorage.getItem(`${this.namespace}_${key}`);
            this.data[key] = item ? JSON.parse(item) : undefined;
        }

        return this.data[key] as T;
    }

    set<T>(key: string, value: T | unknown) {
        this.data[key] = value as T;

        if (window?.localStorage) {
            window.localStorage.setItem(`${this.namespace}_${key}`, JSON.stringify(value));
        }
    }
}
