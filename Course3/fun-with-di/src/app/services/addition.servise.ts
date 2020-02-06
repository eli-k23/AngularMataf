import { AbstractAdditionService } from "./abstract-addition-service";
import { AuditService } from "./audit.service";
import { Injectable } from "@angular/core";

@Injectable()
export class AdditionService extends AbstractAdditionService {
  private id: number;
  constructor(private audit: AuditService) {
    super();
    this.id = Math.ceil(Math.random() * 1000);
  }

  getId(): number {
    return this.id;
  }
  add(op1: number, op2: number): number {
    this.audit.log(`${op1} + ${op2} `);
    return op1 + op2;
  }
}
