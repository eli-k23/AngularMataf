import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AuditService {
  private history: string[] = [];
  log(data: string) {
    this.history.push(data);
  }
}
