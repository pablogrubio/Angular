import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from './user.model';
import {Form} from './user.model';

@Injectable()
export class UsersService {

  public loggedUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('loggedUser')))


  constructor(private http: HttpClient) {
  }

  getAllForms(): Observable<Form[]> {
    return this.http.get<Form[]>('http://localhost:80/forms');
  }

  getById(id: number) {
    return this.http.get<User>('http://localhost:80/user/' + id);
  }

  getByIdForm(id: number) {
    return this.http.get<Form>('http://localhost:80/form/' + id);
  }

  saveForm(form:Form) {
    return this.http.post<Form>('http://localhost:80/form', form)

  }
  deleteForm(form:Form){
    return this.http.delete<Form>('http://localhost:80/form/'+form.Id);
  }

  saveUser(user: User) {
    return this.http.post<User>('http://localhost:80/user', user).map(user => {
      localStorage.setItem('loggedUser', JSON.stringify(user));
      this.loggedUserSubject.next(user);
    });
  }

  loginUser(user:User){
    return this.http.post<User>('http://localhost:80/login',user).map(user=>{
      localStorage.setItem('loggedUser', JSON.stringify(user));
      this.loggedUserSubject.next(user);
    });
  }

  logout() {
    localStorage.removeItem('loggedUser');
    this.loggedUserSubject.next(null);
  }

}
