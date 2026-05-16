import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
  /*
   * Objetivo del servicio:
   * Encapsular localStorage para no repetir JSON.parse y JSON.stringify.
   *
   * Que debe completar el estudiante:
   * Agregar manejo de expiracion o limpieza por usuario si el proyecto crece.
   */

  getItem<T>(key: string, fallback: T): T {
    const rawValue = localStorage.getItem(key);

    if (!rawValue) {
      return fallback;
    }

    try {
      const data = JSON.parse(rawValue);

      // si expiró
      if (data.expiry && Date.now() > data.expiry) {
        localStorage.removeItem(key);
        return fallback;
      }

      return data.value;

     /* return JSON.parse(rawValue) as T;*/
    } catch {
      return fallback;
    }
  }

  setItem<T>(key: string, value: T, minutes?: number): void {
    const data: any = {
      value: value
    };

    if (minutes) {
      data.expiry = Date.now() + minutes * 60 * 1000;
    }
    
    localStorage.setItem(key, JSON.stringify(data));
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }
}
