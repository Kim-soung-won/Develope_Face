'use client'

import {
  Card,
  CardContent,
  Typography,
  Box,
  Select,
  MenuItem,
  FormControl,
  Grid,
  useTheme,
  Slider,
  Stack,
} from '@mui/material'
import React, { useState } from 'react'
import { IconInfo } from '@/shared/constants/icons' // 실제 파일 경로에 맞게 수정해주세요.
import { RGB } from '@/shared/utils'
import {
  BackgroundColorSelecter,
  BorderSelectComp,
  IconSelectBlock,
  ShadowSelectComp,
} from '@/shared/ui/select'
import {
  PreviewCodeInCompPage,
  PreviewComponentBlock,
} from '@/shared/ui/preview'
import { Color } from '@/shared/constants'
import { ColorOption } from '@/shared/constants/colors'
import { SimpleSlider } from '@/shared/ui/slider'

const toRgba = (rgb: string, alpha: number) => {
  return rgb.replace('rgb', 'rgba').replace(')', `, ${alpha})`)
}

export function HtmlCssButtonExamplePage() {
  const [selectedColor, setSelectedColor] = useState<ColorOption>(
    Color.colorOptions[0],
  )
  const [selectedIcon, setSelectedIcon] = useState<IconInfo>({
    name: 'NONE',
    Component: null,
    source: null,
    tags: [],
  })
  const [borderColor, setBorderColor] = useState<ColorOption>(
    Color.colorOptions[13],
  )
  const [shadowColor, setShadowColor] = useState<ColorOption>(
    Color.colorOptions[13],
  )

  const [isHovered, setIsHovered] = useState(false)
  const [shadow, setShadow] = useState(5)
  const [borderRadius, setBorderRadius] = useState(6)
  const [borderWidth, setBorderWidth] = useState(0)
  const [fontSize, setFontSize] = useState(16)

  const isDark: boolean = useTheme().palette.mode === 'dark'

  const baseButtonStyle: React.CSSProperties = {
    backgroundColor: selectedColor.rgb,
    color: 'white',
    padding: '8px 16px',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    border: `${borderWidth}px solid ${borderColor.rgb}`,
    borderRadius: `${borderRadius}px`,
    fontSize: `${fontSize}px`,
    boxShadow:
      shadow > 0
        ? `0px ${shadow}px ${shadow * 2}px ${toRgba(shadowColor.rgb, 0.2)}`
        : 'none',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
  }

  const hoverButtonStyle: React.CSSProperties = {
    backgroundColor: isDark
      ? RGB.lightenRgb(selectedColor.rgb)
      : RGB.darkenRgb(selectedColor.rgb),
    transform: 'translateY(-2px)',
    boxShadow:
      shadow > 0
        ? `0px ${shadow + 2}px ${shadow * 2.5}px ${toRgba(shadowColor.rgb, 0.3)}`
        : 'none',
  }

  const currentButtonStyle = isHovered
    ? { ...baseButtonStyle, ...hoverButtonStyle }
    : baseButtonStyle

  const buttonExampleCode = `
import React, { useState } from 'react';
${selectedIcon.name !== 'NONE' ? `import { ${selectedIcon.name} } from '${selectedIcon.source}';` : ''}

const App = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  const baseStyle: React.CSSProperties = {
    backgroundColor: '${selectedColor.rgb}',
    color: 'white',
    padding: '8px 16px',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    border: '${borderWidth}px solid ${borderColor.rgb}',
    borderRadius: '${borderRadius}px',
    fontSize: '${fontSize}px',
    boxShadow: '${shadow > 0 ? `0px ${shadow}px ${shadow * 2}px ${toRgba(shadowColor.rgb, 0.2)}` : 'none'}',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
  };

  const hoverStyle: React.CSSProperties = {
    backgroundColor: '${isDark ? RGB.lightenRgb(selectedColor.rgb) : RGB.darkenRgb(selectedColor.rgb)}',
    transform: 'translateY(-2px)',
    boxShadow: '${shadow > 0 ? `0px ${shadow + 2}px ${shadow * 2.5}px ${toRgba(shadowColor.rgb, 0.3)}` : 'none'}',
  };

  const currentStyle = isHovered ? { ...baseStyle, ...hoverStyle } : baseStyle;

  return (
    <button 
      style={currentStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      ${selectedIcon.name !== 'NONE' ? `<${selectedIcon.name} ${selectedIcon.source === 'lucide-react' ? `size={${fontSize}}` : `style={{ fontSize: ${fontSize} }}`} />` : ''}
      <span>Button</span>
    </button>
  );
};
`
  return (
    <Grid container spacing={4}>
      <Grid size={12}>
        <Stack spacing={4}>
          <PreviewComponentBlock
            PreviewComp={
              <button
                style={currentButtonStyle}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {selectedIcon.Component &&
                  (selectedIcon.source === 'lucide-react' ? (
                    <selectedIcon.Component size={fontSize} />
                  ) : (
                    <selectedIcon.Component sx={{ fontSize: fontSize }} />
                  ))}
                <span>Button</span>
              </button>
            }
          />

          <Card>
            <CardContent>
              <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
                스타일 옵션
              </Typography>
              <Stack spacing={2}>
                <IconSelectBlock
                  selectedIcon={selectedIcon}
                  setIconState={setSelectedIcon}
                />

                {/* 색상 선택 */}
                <BackgroundColorSelecter
                  selectedColor={selectedColor}
                  setSelectedColor={setSelectedColor}
                />

                {/* 그림자 선택 */}
                <ShadowSelectComp
                  shadow={shadow}
                  shadowColor={shadowColor}
                  setShadow={setShadow}
                  setShadowColor={setShadowColor}
                />

                {/* 테두리 굵기, 색상 */}
                <BorderSelectComp
                  borderWidth={borderWidth}
                  borderColor={borderColor}
                  setBorderWidth={setBorderWidth}
                  setBorderColor={setBorderColor}
                />

                <SimpleSlider
                  title="테두리 둥글기"
                  fontSize={borderRadius}
                  setFontSize={setBorderRadius}
                  max={25}
                />

                <SimpleSlider
                  title="폰트 크기"
                  fontSize={fontSize}
                  setFontSize={setFontSize}
                />
              </Stack>
            </CardContent>
          </Card>
        </Stack>
      </Grid>

      <PreviewCodeInCompPage examCode={buttonExampleCode} />
    </Grid>
  )
}
