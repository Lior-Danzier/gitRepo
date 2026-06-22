import { useEffect, useState } from 'react'

type Forecast = {
    date: string
    temperatureC: number
    temperatureF: number
    summary: string
}

export default function Weather() {
    const [forecasts, setForecasts] = useState<Forecast[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const load = async () => {
            try {
                const res = await fetch('/api/weatherforecast')
                if (!res.ok) throw new Error(`HTTP ${res.status}`)
                const data: Forecast[] = await res.json()
                setForecasts(data)
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Unknown error')
            } finally {
                setLoading(false)
            }
        }
        load()
    }, [])

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error}</p>

    return (
        <div>
            <h2>Weather Forecast</h2>
            <ul>
                {forecasts.map((f) => (
                    <li key={f.date}>
                        {f.date} — {f.temperatureC}°C / {f.temperatureF}°F — {f.summary}
                    </li>
                ))}
            </ul>
        </div>
    )
}
