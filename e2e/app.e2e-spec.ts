import { MiNuevoProyectoAngularPage } from './app.po';

describe('mi-nuevo-proyecto-angular App', function() {
  let page: MiNuevoProyectoAngularPage;

  beforeEach(() => {
    page = new MiNuevoProyectoAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
