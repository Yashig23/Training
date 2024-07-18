// import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const number = 2+2;
  if(number == 4){
  return true;
  }
  else{
  return false;
  }
};
