import * as React from 'react';

export interface IFooterProps {
}

export default function Footer (props: IFooterProps) {
  return (
    <div className="container position-absolute bottom-0">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <span className="text-muted">© {new Date().getFullYear()} </span>
        </div>
      </footer>
    </div>
  );
}
