"use client"

export function SimpleImageTest() {
    const testImages = [
        "/images/Logo/buildro-logo.png",
        "/images/Logo/buil-ai.png",
        "/images/Home/ai-image.png",
        "/images/Login/login-image.png",
        "/placeholder-logo.png"
    ]

    return (
        <div className="p-8 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8 text-center">Simple Image Test (No Next.js Optimization)</h1>

            <div className="mb-8 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Direct Image Loading</h2>
                <p className="text-sm text-gray-600">
                    This test uses regular HTML img tags to bypass Next.js Image optimization.
                    If these work but Next.js Images don't, the issue is with Next.js configuration.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {testImages.map((src, index) => (
                    <div key={index} className="border rounded-lg p-4 bg-white dark:bg-gray-900">
                        <h3 className="font-medium mb-2">Test {index + 1}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 break-all">{src}</p>

                        <div className="mb-4">
                            <img
                                src={src}
                                alt={`Test image ${index + 1}`}
                                className="w-full h-32 object-contain bg-gray-100 dark:bg-gray-800 rounded border"
                                onLoad={() => console.log(`✅ Simple img loaded: ${src}`)}
                                onError={(e) => {
                                    console.error(`❌ Simple img failed: ${src}`, e)
                                    console.error(`Error details:`, e.target)
                                }}
                            />
                        </div>

                        <div className="text-sm text-gray-600">
                            <div><strong>Path:</strong> {src}</div>
                            <div><strong>Type:</strong> Regular img tag</div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Test Results</h2>
                <p className="text-sm text-gray-600 mb-4">
                    Check the browser console for loading success/failure messages.
                </p>

                <div className="space-y-2 text-sm">
                    <div>✅ = Image loaded successfully</div>
                    <div>❌ = Image failed to load</div>
                    <div>Check Network tab for HTTP status codes</div>
                </div>
            </div>
        </div>
    )
} 