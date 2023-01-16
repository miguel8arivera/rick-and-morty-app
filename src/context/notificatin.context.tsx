import { Notification } from '../components/index';
import React, { FC, useState } from 'react';
import { AlertColor } from '@mui/material';

type NotificationContextProps = {
  getError: (msg: string) => void;
  getSuccess: (msg: string) => void;
};

const NotificationContext =
  React.createContext<NotificationContextProps | null>(null);

export const NotificationProvider: FC<{ children: JSX.Element }> = function ({
  children,
}) {
  const [msg, setMsg] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [severity, setSeverity] = React.useState<AlertColor | undefined>(
    undefined
  );

  const handleClose = () => {
    setOpen(false);
  };

  const getError = (msg: string) => {
    setSeverity('error'), setOpen(true), setMsg(msg);
  };

  const getSuccess = (msg: string) => {
    setSeverity('success'), setOpen(true), setMsg(msg);
  };

  const value = {
    getError,
    getSuccess,
  };

  return (
    <NotificationContext.Provider value={value}>
      <Notification
        handleClose={handleClose}
        open={open}
        severity={severity}
        msg={msg}
      />
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const context = React.useContext(NotificationContext);
  if (!context)
    throw new Error(
      'useNotification must be used within a NotificationProvider'
    );
  return context;
};
