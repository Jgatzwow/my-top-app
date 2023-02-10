import styles from './Tag.module.css'
import { TagProps } from '@/components/Tag/Tag.props'
import cn from 'classnames'

export const Tag = ({
  size = 'medium',
  children,
  href,
  className,
  color = 'ghost',
  ...props
}: TagProps): JSX.Element => {
  return (
    <div
      className={cn(styles.tag, className, {
        [styles.small]: size === 'small',
        [styles.medium]: size === 'medium',
        [styles.ghost]: color === 'ghost',
        [styles.green]: color === 'green',
        [styles.gray]: color === 'gray',
        [styles.red]: color === 'red',
        [styles.primary]: color === 'primary'
      })}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  )
}
