import { TestBed } from '@angular/core/testing';

import { UsuarioService } from './usuario.service';

describe('Usuario', () => {
  let service: Usuario;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Usuario);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
