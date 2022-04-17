export class Pagination {
  constructor({ initPage = 1, total = 1, onChangePage }) {
    this._page = initPage;
    this.total = total;
    this.onChangePage = onChangePage;
  }

  get page() {
    return this._page;
  }
  set page(val) {
    this._page = val;
    if (this.onChangePage) {
      this.onChangePage(val);
    }
  }

  nextPage() {
    if (this.page === this.total) {
      return;
    }
    this._page += 1;
  }
}
