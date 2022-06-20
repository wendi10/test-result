import { Injectable } from '@angular/core';
import { AUTH } from '../shared/consts/localStorage.const';

@Injectable()
export class StorageService {
    public clear(): void {
        localStorage.clear()
    }

    public setSessionToken(loginCredential: any) {
        localStorage.setItem(AUTH, JSON.stringify(loginCredential));
    }

    public getSessionToken(): string {
        const session = localStorage.getItem(AUTH);
        return session ? JSON.parse(session) : '';
      }
}