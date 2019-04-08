import React from 'react';

function CoolButton({
  children,
  isActive,
  isBlack,
  isCentered,
  isDanger,
  isDark,
  isFocused,
  isGrouped,
  isHovered,
  isInfo,
  isInverted,
  isLarge,
  isLight,
  isLink,
  isLoading,
  isMedium,
  isOutlined,
  isPrimary,
  isRight,
  isRounded,
  isSelected,
  isSmall,
  isStatic,
  isSuccess,
  isText,
  isWarning,
  isWhite,
  href,
  onClick,
  isSpaced,
}) {
  let classes = '';
  classes += 'button';
  classes += isActive ? ' is-active' : '';
  classes += isBlack ? ' is-black' : '';
  classes += isCentered ? ' is-centered' : '';
  classes += isDanger ? ' is-danger' : '';
  classes += isDark ? ' is-dark' : '';
  classes += isFocused ? ' is-focused' : '';
  classes += isGrouped ? ' is-grouped' : '';
  classes += isHovered ? ' is-hovered' : '';
  classes += isInfo ? ' is-info' : '';
  classes += isInverted ? ' is-inverted' : '';
  classes += isLarge ? ' is-large' : '';
  classes += isLight ? ' is-light' : '';
  classes += isLink ? ' is-link' : '';
  classes += isLoading ? ' is-loading' : '';
  classes += isMedium ? ' is-medium' : '';
  classes += isOutlined ? ' is-outlined' : '';
  classes += isPrimary ? ' is-primary' : '';
  classes += isRight ? ' is-right' : '';
  classes += isRounded ? ' is-rounded' : '';
  classes += isSelected ? ' is-selected' : '';
  classes += isSmall ? ' is-small' : '';
  classes += isStatic ? ' is-static' : '';
  classes += isSuccess ? ' is-success' : '';
  classes += isText ? ' is-text' : '';
  classes += isWarning ? ' is-warning' : '';
  classes += isWhite ? ' is-white' : ''; 
  classes += isSpaced ? ' isSpaced' : '';  
  return (
    <a href={href} onClick={onClick} className={classes}>
      {children}
    </a>
  );
}

export default CoolButton;