"use client"

import { useState, useRef, useEffect } from "react"
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Download,
  AirplayIcon as Spotify,
  ExternalLink,
  Share2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { cn } from "@/lib/utils"

interface PodcastPlayerProps {
  title: string
  audioSrc: string
  downloadUrl: string
  spotifyUrl: string
  appleUrl?: string
  googleUrl?: string
  className?: string
  compact?: boolean
}

export function PodcastPlayer({
  title,
  audioSrc,
  downloadUrl,
  spotifyUrl,
  appleUrl,
  googleUrl,
  className,
  compact = false,
}: PodcastPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [volume, setVolume] = useState(0.7)
  const [isMuted, setIsMuted] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const setAudioData = () => {
      setDuration(audio.duration)
      setIsLoaded(true)
    }

    const setAudioTime = () => setCurrentTime(audio.currentTime)

    // Events
    audio.addEventListener("loadeddata", setAudioData)
    audio.addEventListener("timeupdate", setAudioTime)
    audio.addEventListener("ended", () => setIsPlaying(false))

    // Cleanup
    return () => {
      audio.removeEventListener("loadeddata", setAudioData)
      audio.removeEventListener("timeupdate", setAudioTime)
      audio.removeEventListener("ended", () => setIsPlaying(false))
    }
  }, [])

  // Handle play/pause
  const togglePlay = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  // Handle volume
  const toggleMute = () => {
    if (!audioRef.current) return

    if (isMuted) {
      audioRef.current.volume = volume
      setIsMuted(false)
    } else {
      audioRef.current.volume = 0
      setIsMuted(true)
    }
  }

  const handleVolumeChange = (newVolume: number[]) => {
    const value = newVolume[0]
    setVolume(value)

    if (audioRef.current) {
      audioRef.current.volume = value
      if (value === 0) {
        setIsMuted(true)
      } else if (isMuted) {
        setIsMuted(false)
      }
    }
  }

  // Handle seek
  const handleSeek = (newTime: number[]) => {
    if (!audioRef.current) return

    const seekTime = newTime[0]
    audioRef.current.currentTime = seekTime
    setCurrentTime(seekTime)
  }

  // Skip forward/backward
  const skipForward = () => {
    if (!audioRef.current) return
    audioRef.current.currentTime += 15
  }

  const skipBackward = () => {
    if (!audioRef.current) return
    audioRef.current.currentTime -= 15
  }

  // Format time
  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00"

    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  return (
    <div className={cn("rounded-lg border bg-card p-4 shadow-sm", className)}>
      <audio ref={audioRef} src={audioSrc} preload="metadata" />

      {!compact && (
        <div className="mb-4">
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
      )}

      <div className="space-y-4">
        {/* Progress bar */}
        <div className="space-y-1">
          <Slider
            value={[currentTime]}
            max={duration || 100}
            step={1}
            onValueChange={handleSeek}
            disabled={!isLoaded}
            className="cursor-pointer"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={skipBackward}
              disabled={!isLoaded}
              aria-label="Voltar 15 segundos"
            >
              <SkipBack className="h-5 w-5" />
            </Button>

            <Button
              variant="default"
              size="icon"
              className="h-10 w-10 rounded-full"
              onClick={togglePlay}
              disabled={!isLoaded}
              aria-label={isPlaying ? "Pausar" : "Reproduzir"}
            >
              {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 pl-0.5" />}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={skipForward}
              disabled={!isLoaded}
              aria-label="Avançar 15 segundos"
            >
              <SkipForward className="h-5 w-5" />
            </Button>
          </div>

          {!compact && (
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMute}
                aria-label={isMuted ? "Ativar som" : "Silenciar"}
              >
                {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
              </Button>

              <Slider
                value={[isMuted ? 0 : volume]}
                max={1}
                step={0.01}
                onValueChange={handleVolumeChange}
                className="w-24"
              />
            </div>
          )}
        </div>

        {/* External links */}
        {!compact && (
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <Button variant="outline" size="sm" asChild>
              <a href={downloadUrl} download aria-label="Baixar episódio">
                <Download className="mr-1 h-4 w-4" />
                <span>Baixar</span>
              </a>
            </Button>

            <Button variant="outline" size="sm" asChild>
              <a href={spotifyUrl} target="_blank" rel="noopener noreferrer" aria-label="Ouvir no Spotify">
                <Spotify className="mr-1 h-4 w-4" />
                <span>Spotify</span>
              </a>
            </Button>

            {appleUrl && (
              <Button variant="outline" size="sm" asChild>
                <a href={appleUrl} target="_blank" rel="noopener noreferrer" aria-label="Ouvir no Apple Podcasts">
                  <ExternalLink className="mr-1 h-4 w-4" />
                  <span>Apple</span>
                </a>
              </Button>
            )}

            {googleUrl && (
              <Button variant="outline" size="sm" asChild>
                <a href={googleUrl} target="_blank" rel="noopener noreferrer" aria-label="Ouvir no Google Podcasts">
                  <ExternalLink className="mr-1 h-4 w-4" />
                  <span>Google</span>
                </a>
              </Button>
            )}

            <Button variant="ghost" size="icon" className="ml-auto" aria-label="Compartilhar">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

