export default function LandingPage() {
          <div className="grid md:grid-cols-3 gap-8">
            {[
              'Atendimento imediato 24 horas',
              'Defesa estratégica e personalizada',
              'Sigilo absoluto e atuação firme',
            ].map((item, index) => (
              <div
                key={index}
                className="bg-zinc-950 border border-zinc-800 p-8 rounded-3xl"
              >
                <div className="text-5xl mb-4 text-yellow-500">⚖</div>
                <p className="text-[16px] md:text-[18px] text-white/90 leading-[1.6]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 bg-gradient-to-r from-zinc-950 via-black to-zinc-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-[32px] md:text-[48px] font-bold mb-6 leading-tight text-white"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Precisa de Defesa Criminal?
          </h2>

          <p className="text-white/80 text-[16px] md:text-[18px] mb-10 leading-[1.6]">
            Entre em contato agora para um atendimento rápido e estratégico.
          </p>

          <a
            href="https://wa.me/5511981591327"
            target="_blank"
            className="inline-block bg-green-600 hover:bg-green-700 transition-all px-10 py-5 rounded-2xl text-[18px] font-bold shadow-2xl animate-pulse"
          >
            Falar com Especialista Agora
          </a>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-black border-t border-zinc-900 px-6 py-10 text-center text-white/70">
        <p className="text-lg font-semibold text-white mb-2">
          Dra. MICHELLE SPERANDIO - Advogada Criminalista
        </p>

        <p>
          Rua Wenceslau Brás, 220, sala 21, São Caetano do Sul - SP
        </p>

        <p className="mt-2">
          WhatsApp: (11) 98159-1327
        </p>
      </footer>
    </div>
  )
}

