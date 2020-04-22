import { useState, useEffect, useCallback } from 'react';
import { createContainer } from 'unstated-next';
import produce from 'immer';
import { useLocalStorage } from 'react-use';

const defaultUserInfo = {
  token: '', // token
  nickname: '', // 昵称
};

type UserInfo = typeof defaultUserInfo;
type PartUserInfo = Partial<UserInfo>;

const User = () => {
  const [initUserInfo, saveUserInfo] = useLocalStorage<UserInfo>('userInfo', defaultUserInfo);
  const [userInfo, setUserInfo] = useState<UserInfo>(initUserInfo);
  const logout = useCallback(() => {
    setUserInfo(defaultUserInfo);
  }, [setUserInfo]);

  const onUpdUserInfo = useCallback(
    (partUserInfo: PartUserInfo) => {
      setUserInfo(
        produce(userInfo, (draftState) => {
          Object.entries(partUserInfo).forEach(([key, value]) => {
            Object.assign(draftState, partUserInfo);
          });
        })
      );
    },
    [userInfo, setUserInfo]
  );

  useEffect(() => {
    saveUserInfo(userInfo);
  }, [userInfo, saveUserInfo]);

  return { logout, userInfo, setUserInfo: onUpdUserInfo };
};

export default createContainer(User);
