import { useCallback, useEffect, useMemo, useRef } from "react";
export interface CanvasSize {
  width: number
  height: number
  scale: number
}

const canvasSize = {
  scale: 10,
  width: 300,
  height: 300
}
const canvasCell = Array(31).fill(0).map((_, index) => ({ start: { x: index * 10, y: 0 }, end: { x: index * 10, y: 300 } }))
  .concat(Array(31).fill(0).map((_, index) => ({ start: { x: 0, y: index * 10 }, end: { x: 300, y: index * 10 } })))
console.log("canvasCell", canvasCell)
export function Draw() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const canvasContext = useMemo(() => {
    if (!canvasRef.current) return
    return canvasRef.current.getContext('2d')
  }, [canvasRef])
  const drawCell = useCallback(() => {
    if (!canvasContext) return

    const scale = canvasSize.scale
    canvasContext.beginPath()

    canvasCell.map((line) => {
      const { start, end } = line
      canvasContext.strokeStyle = 'orange'
      canvasContext.moveTo(start.x * scale, start.y * scale)
      canvasContext.lineTo(end.x * scale, end.y * scale)
    })
    canvasContext.stroke();
  }, [canvasContext])
  const initCanvas = useCallback(() => {
    drawCell()
  }, [drawCell])
  useEffect(() => {
    initCanvas()
  }, [initCanvas])
  return <canvas className=" bg-gray-200" ref={canvasRef} width={canvasSize.width} height={canvasSize.height} />
}