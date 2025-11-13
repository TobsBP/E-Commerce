"use client"

import type { MenuLinkProps } from "@/src/types/Interfaces/IMenuLinkProps"
import Link from "next/link"
import { MenuLinkStyles } from "./MenuLink.styles"

export default function MenuLink({ href, label, icon }: MenuLinkProps) {
  return (
    <Link href={href} className={MenuLinkStyles.link}>
      {/* Efeito de brilho no hover */}
      <div className={MenuLinkStyles.linkGlow} />
      
      {/* Label com efeito */}
      <span className={MenuLinkStyles.linkLabel}>
        {label}
      </span>
      
      {/* Ícone com animação */}
      {icon && (
        <span className={MenuLinkStyles.linkIcon}>
          {icon}
        </span>
      )}
      
      {/* Indicador inferior */}
      <div className={MenuLinkStyles.linkIndicator} />
    </Link>
  )
}