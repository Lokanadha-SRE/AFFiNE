import { styled } from '@/styles';
import MuiAvatar from '@mui/material/Avatar';

export const StyledSettingInputContainer = styled('div')(() => {
  return {
    marginTop: '12px',
  };
});

export const StyledDeleteButtonContainer = styled('div')(() => {
  return {
    marginTop: '30px',
  };
});

export const StyledSettingAvatarContent = styled('div')(() => {
  return {
    marginTop: '12px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: '72px',
  };
});

export const StyledSettingAvatar = styled(MuiAvatar)(() => {
  return { height: '72px', width: '72px', marginRight: '24px' };
});

export const StyledMemberWarp = styled('div')(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    padding: '40px 0',
  };
});
