export const iconClasses = {
  base: 'text-gray-500',
  outline: 'border border-muted p-[5px]',
  center: 'inline-block align-middle',
  rounded: {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full',
  },
};

export const paginationClasses = {
  base: {
    item: '[&>.rc-pagination-item>a]:text-gray-700 [&>.rc-pagination-item>a]:font-medium [&>li.rc-pagination-item]:border-muted [&>.rc-pagination-item>a]:hover:text-gray-900 [&>.rc-pagination-item>a]:focus:text-gray-700 [&>.rc-pagination-item:not(.rc-pagination-item-active)]:bg-transparent',
    icon: '[&>.rc-pagination-prev]:align-baseline [&>.rc-pagination-next]:align-baseline',
    outline:
      '[&>.rc-pagination-item]:leading-7 [&>.rc-pagination-item]:border-0',
    jumperDiv:
      '[&>.rc-pagination-options>.rc-pagination-options-quick-jumper]:text-sm [&>.rc-pagination-options>.rc-pagination-options-quick-jumper]:text-gray-500',
    jumperInput:
      '[&>.rc-pagination-options>.rc-pagination-options-quick-jumper>input]:!py-[3px] [&>.rc-pagination-options>.rc-pagination-options-quick-jumper>input]:text-sm [&>.rc-pagination-options>.rc-pagination-options-quick-jumper>input]:border-muted [&>.rc-pagination-options>.rc-pagination-options-quick-jumper>input]:ring-0',
  },
  rounded: {
    none: '[&>.rc-pagination-item]:rounded-none [&>.rc-pagination-options>.rc-pagination-options-quick-jumper>input]:rounded-none',
    sm: '[&>.rc-pagination-item]:rounded-sm [&>.rc-pagination-options>.rc-pagination-options-quick-jumper>input]:rounded-sm',
    md: '[&>.rc-pagination-item]:rounded-md [&>.rc-pagination-options>.rc-pagination-options-quick-jumper>input]:rounded-md',
    lg: '[&>.rc-pagination-item]:rounded-lg [&>.rc-pagination-options>.rc-pagination-options-quick-jumper>input]:rounded-lg',
    full: '[&>.rc-pagination-item]:rounded-full [&>.rc-pagination-options>.rc-pagination-options-quick-jumper>input]:rounded-full',
  },
  variant: {
    solid: {
      base: '[&>.rc-pagination-item-active>a]:!text-gray-0 [&>.rc-pagination-item-active>a]:hover:text-gray-0',
      color: {
        primary:
          '[&>.rc-pagination-item-active]:bg-gray-300 [&>li.rc-pagination-item-active]:border-primary [&>.rc-pagination-item-active]:hover:border-primary [&>.rc-pagination-item-active]:focus:border-primary',
        secondary:
          '[&>.rc-pagination-item-active]:bg-secondary [&>li.rc-pagination-item-active]:border-secondary [&>.rc-pagination-item-active]:hover:border-secondary [&>.rc-pagination-item-active]:focus:border-secondary',
        danger:
          '[&>.rc-pagination-item-active]:bg-red [&>li.rc-pagination-item-active]:border-red [&>.rc-pagination-item-active]:hover:border-red [&>.rc-pagination-item-active]:focus:border-red',
        info: '[&>.rc-pagination-item-active]:bg-blue [&>li.rc-pagination-item-active]:border-blue [&>.rc-pagination-item-active]:hover:border-blue [&>.rc-pagination-item-active]:focus:border-blue',
        success:
          '[&>.rc-pagination-item-active]:bg-green [&>li.rc-pagination-item-active]:border-green [&>.rc-pagination-item-active]:hover:border-green [&>.rc-pagination-item-active]:focus:border-green',
        warning:
          '[&>.rc-pagination-item-active]:bg-orange [&>li.rc-pagination-item-active]:border-orange [&>.rc-pagination-item-active]:hover:border-orange [&>.rc-pagination-item-active]:focus:border-orange',
      },
    },
    flat: {
      base: '',
      color: {
        primary:
          '[&>.rc-pagination-item-active]:bg-primary-lighter [&>li.rc-pagination-item-active]:border-primary-lighter [&>.rc-pagination-item-active>a]:text-primary-dark [&>.rc-pagination-item-active>a]:hover:text-primary-dark [&>.rc-pagination-item-active>a]:focus:text-primary-dark [&>.rc-pagination-item-active]:hover:border-primary-lighter [&>.rc-pagination-item-active]:focus:border-primary-lighter',
        secondary:
          '[&>.rc-pagination-item-active]:bg-secondary-lighter [&>li.rc-pagination-item-active]:border-secondary-lighter [&>.rc-pagination-item-active>a]:text-secondary-dark [&>.rc-pagination-item-active>a]:hover:text-secondary-dark [&>.rc-pagination-item-active>a]:focus:text-secondary-dark [&>.rc-pagination-item-active]:hover:border-secondary-lighter [&>.rc-pagination-item-active]:focus:border-secondary-lighter',
        danger:
          '[&>.rc-pagination-item-active]:bg-red-lighter [&>li.rc-pagination-item-active]:border-red-lighter [&>.rc-pagination-item-active>a]:text-red-dark [&>.rc-pagination-item-active>a]:hover:text-red-dark [&>.rc-pagination-item-active>a]:focus:text-red-dark [&>.rc-pagination-item-active]:hover:border-red-lighter [&>.rc-pagination-item-active]:focus:border-red-lighter',
        info: '[&>.rc-pagination-item-active]:bg-blue-lighter [&>li.rc-pagination-item-active]:border-blue-lighter [&>.rc-pagination-item-active>a]:text-blue-dark [&>.rc-pagination-item-active>a]:hover:text-blue-dark [&>.rc-pagination-item-active>a]:focus:text-blue-dark [&>.rc-pagination-item-active]:hover:border-blue-lighter [&>.rc-pagination-item-active]:focus:border-blue-lighter',
        success:
          '[&>.rc-pagination-item-active]:bg-green-lighter [&>li.rc-pagination-item-active]:border-green-lighter [&>.rc-pagination-item-active>a]:text-green-dark [&>.rc-pagination-item-active>a]:hover:text-green-dark [&>.rc-pagination-item-active>a]:focus:text-green-dark [&>.rc-pagination-item-active]:hover:border-green-lighter [&>.rc-pagination-item-active]:focus:border-green-lighter',
        warning:
          '[&>.rc-pagination-item-active]:bg-orange-lighter [&>li.rc-pagination-item-active]:border-orange-lighter [&>.rc-pagination-item-active>a]:text-orange-dark [&>.rc-pagination-item-active>a]:hover:text-orange-dark [&>.rc-pagination-item-active>a]:focus:text-orange-dark [&>.rc-pagination-item-active]:hover:border-orange-lighter [&>.rc-pagination-item-active]:focus:border-orange-lighter',
      },
    },
  },
};
