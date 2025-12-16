
import React from 'react';
import { clsx } from 'clsx';

const Alert = ({ type = 'info', title, children, className }) => {
  const styles = {
    info: "bg-alert-info text-blue-800 border-blue-200",
    success: "bg-alert-success text-green-800 border-green-200",
    warning: "bg-alert-warning text-yellow-800 border-yellow-200",
    error: "bg-alert-error text-red-800 border-red-200"
  };

  return (
    <div className={clsx("p-4 rounded-md border flex gap-3", styles[type], className)} role="alert">
      <div className="flex-1">
        {title && <h5 className="font-semibold mb-1">{title}</h5>}
        <div className="text-sm opacity-90">{children}</div>
      </div>
    </div>
  );
};

export default Alert;
