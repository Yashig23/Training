export class Product {
    private id: number;
    private name: string;
    private createdAt: Date;
    private updatedAt: Date;
    private createdBy: string;
    private updatedBy: string;
  
    constructor(id: number, name: string, createdBy: string, updatedBy: string) {
      this.id = id;
      this.name = name;
      this.createdAt = new Date();
      this.updatedAt = new Date();
      this.createdBy = createdBy;
      this.updatedBy = updatedBy;
    }
  
    public getId(): number {
      return this.id;
    }
  
    public setId(id: number): void {
      this.id = id;
    }
  
    public getName(): string {
      return this.name;
    }
  
    public setName(name: string): void {
      this.name = name;
      this.updatedAt = new Date();
    }
  
    public getCreatedAt(): Date {
      return this.createdAt;
    }
  
    public getUpdatedAt(): Date {
      return this.updatedAt;
    }
  
    public getCreatedBy(): string {
      return this.createdBy;
    }
  
    public getUpdatedBy(): string {
      return this.updatedBy;
    }
  
    public setUpdatedBy(updatedBy: string): void {
      this.updatedBy = updatedBy;
      this.updatedAt = new Date();
    }
  }
  