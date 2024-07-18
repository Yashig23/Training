export class Admin{
    private id:number;
    private name: string;
    private createdAt: Date;
    private updatedAt: Date;
    private updatedBy: string;
    private createdBy: string;
    private editing: boolean ;
    public checked!: boolean;

    constructor(id: number, name: string, createdBy: string, updatedBy: string, editing: boolean, checked: boolean) {
      this.id = id;
      this.name = name;
      this.createdAt = new Date();
      this.updatedAt = new Date();
      this.createdBy = createdBy;
      this.updatedBy = updatedBy;
      this.editing = editing
      this.checked = checked
    }

    public getId(): number {
      return this.id;
    }

    
    public get value() : number {
        return 10
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

    public isEditing(): boolean {
        return this.editing;
      }
    
      public setEditing(editing: boolean): void {
        this.editing = editing;
      }
    
      public toggleEditing(): void {
        this.editing = !this.editing;
      }

      public isChecked(): boolean {
        return this.checked;
      }
    
      public setChecked(checked: boolean): void {
        this.checked = checked;
      }
    
      public toggleChecked(): void {
        this.checked = !this.checked;
      }  

  }
  