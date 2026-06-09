import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Country {
  CountryCode:     string;
  CountryCode3:    string;
  PhonePrefix:     string;
  CurrencyCode:    string;
  DefaultLangCode: string;
  FlagEmoji:       string;
  ShortName:       string;
  FullName:        string;
  displayName:     string;  // computed: FlagEmoji + ShortName
}

export interface Language {
  LanguageCode: string;
  LanguageName: string;
  NativeName:   string;
  Direction:    'LTR' | 'RTL';
  displayName:  string;  // computed: NativeName (LanguageName)
}

export interface Currency {
  CurrencyCode:   string;
  CurrencyName:   string;
  CurrencySymbol: string;
  DecimalDigits:  number;
  displayName:    string;  // computed: Symbol CurrencyCode — Name
}

@Injectable({ providedIn: 'root' })
export class ReferenceService {
  private countries$?: Observable<Country[]>;
  private languages$?: Observable<Language[]>;
  private currencies$?: Observable<Currency[]>;

  constructor(private http: HttpClient) {}

  getCountries(lang = 'he'): Observable<Country[]> {
    if (!this.countries$) {
      this.countries$ = this.http.get<{ success: boolean; data: Country[] }>(`/api/reference/countries?lang=${lang}`).pipe(
        map(r => r.data.map(c => ({ ...c, displayName: `${c.FlagEmoji} ${c.ShortName}` }))),
        shareReplay(1),
      );
    }
    return this.countries$;
  }

  getLanguages(): Observable<Language[]> {
    if (!this.languages$) {
      this.languages$ = this.http.get<{ success: boolean; data: Language[] }>('/api/reference/languages').pipe(
        map(r => r.data.map(l => ({ ...l, displayName: `${l.NativeName}  (${l.LanguageName})` }))),
        shareReplay(1),
      );
    }
    return this.languages$;
  }

  getCurrencies(): Observable<Currency[]> {
    if (!this.currencies$) {
      this.currencies$ = this.http.get<{ success: boolean; data: Currency[] }>('/api/reference/currencies').pipe(
        map(r => r.data.map(c => ({ ...c, displayName: `${c.CurrencySymbol}  ${c.CurrencyCode} — ${c.CurrencyName}` }))),
        shareReplay(1),
      );
    }
    return this.currencies$;
  }
}
