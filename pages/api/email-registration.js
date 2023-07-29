import path from 'path'
import fs from 'fs'

function buildPath() {
    return path.join(process.cwd(), 'data', 'data.json')
}

function extractData(filePath) {
    const jsonData = fs.readFileSync(filePath)
    return JSON.parse(jsonData)
}

export default function handler(req, res) {
    const { method } = req
    const filePath = buildPath()
    const { events_categories, allEvents } = extractData(filePath)

    if (!allEvents) {
        return res.status(404).json({
            message: 'イベントが存在しません'
        })
    }

    if (method === 'POST') {
        const { email, eventId } = req.body

        if (!email | !email.includes('@')) {
            return res.status(422).json({
                message: '正しいメールアドレスを入力してください'
            })
        }

        const newAllEvents = allEvents.map((ev) => {
            if (ev.id === eventId) {
                if (ev.emails_registered.includes(email)) {
                    res.status(409).json({
                        message: 'このメールアドレスはすでに登錄されています'
                    });
                    return ev;
                }
                return {
                    ...ev,
                    emails_registered: [...ev.emails_registered, email],
                };
            }
            return ev;
        });

        fs.writeFileSync(filePath, JSON.stringify({
            events_categories,
            allEvents: newAllEvents
        }))

        res.status(201).json({
            message: `登録しました。メールアドレス: ${email} イベントID: ${eventId}`
        })
    }
}
