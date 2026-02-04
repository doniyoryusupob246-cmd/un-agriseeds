'use client';

import { useMemo } from 'react';

type Props = { text: string };

function normalizeText(input: string) {
  return input
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n')
    .replace(/^\uFEFF/, '')
    .replace(/\u00A0/g, ' ')
    .trim();
}

export function PrettyDescription({ text }: Props) {
  const sections = useMemo(() => {
    const normalized = normalizeText(text);

    const lines = normalized
      .split('\n')
      .map((l) => l.trim())
      .filter((l) => l.length > 0);

    let section: { title: string; items: string[] } | null = null;
    const out: { title: string; items: string[] }[] = [];

    const pushSection = () => {
      if (section && (section.title || section.items.length)) out.push(section);
    };

    for (const line of lines) {
      if (line.startsWith('🔹')) {
        pushSection();
        section = { title: line.slice(1).trim(), items: [] };
      } else {
        if (!section) section = { title: '', items: [] };
        section.items.push(line);
      }
    }
    pushSection();

    return out;
  }, [text]);

  return (
    <div className="space-y-6">
      {sections.map((s, idx) => (
        <div key={`sec-${idx}-${s.title}`} className="rounded-2xl border bg-white/70 p-4 shadow-sm">
          {s.title && <h3 className="mb-3 text-base font-semibold">🔹 {s.title}</h3>}

          <div className="space-y-2">
            {s.items.some((i) => i.startsWith('-')) && (
              <ul className="ml-5 list-disc space-y-1">
                {s.items
                  .filter((i) => i.startsWith('-'))
                  .map((i, k) => (
                    <li key={`b-${idx}-${k}-${i.slice(0, 16)}`} className="leading-relaxed">
                      {i.replace(/^-+\s*/, '')}
                    </li>
                  ))}
              </ul>
            )}

            {s.items.some((i) => i.startsWith('✅')) && (
              <ul className="space-y-1">
                {s.items
                  .filter((i) => i.startsWith('✅'))
                  .map((i, k) => (
                    <li
                      key={`ok-${idx}-${k}-${i.slice(0, 16)}`}
                      className="font-medium text-green-700">
                      ✅ {i.replace(/^✅\s*/, '')}
                    </li>
                  ))}
              </ul>
            )}

            {s.items.some((i) => !i.startsWith('-') && !i.startsWith('✅')) && (
              <div className="space-y-1 text-sm leading-relaxed text-muted-foreground">
                {s.items
                  .filter((i) => !i.startsWith('-') && !i.startsWith('✅'))
                  .map((i, k) => (
                    <p key={`p-${idx}-${k}-${i.slice(0, 16)}`}>{i}</p>
                  ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
