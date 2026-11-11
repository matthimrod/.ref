/**
 * Notes Theme JavaScript
 * Handles theme toggling, live sidebar filtering, code block copy buttons,
 * automatic Table of Contents, and Mermaid diagram rendering.
 */

(function () {
  'use strict';

  // --- Theme Management ---
  const themeToggle = document.getElementById('theme-toggle');

  function getCurrentTheme() {
    return document.documentElement.getAttribute('data-theme') ||
      (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('notes_theme', theme);
    // If Mermaid is loaded and diagrams exist, re-render
    if (window.renderMermaidDiagrams) {
      window.renderMermaidDiagrams();
    }
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = getCurrentTheme();
      const next = current === 'dark' ? 'light' : 'dark';
      setTheme(next);
    });
  }

  // --- Mobile Sidebar Toggle ---
  const sidebarToggle = document.getElementById('sidebar-toggle');
  const sidebar = document.getElementById('site-sidebar');
  const backdrop = document.getElementById('sidebar-backdrop');

  function openSidebar() {
    if (sidebar) sidebar.classList.add('open');
    if (backdrop) backdrop.classList.add('show');
    if (sidebarToggle) sidebarToggle.setAttribute('aria-expanded', 'true');
  }

  function closeSidebar() {
    if (sidebar) sidebar.classList.remove('open');
    if (backdrop) backdrop.classList.remove('show');
    if (sidebarToggle) sidebarToggle.setAttribute('aria-expanded', 'false');
  }

  if (sidebarToggle) {
    sidebarToggle.addEventListener('click', () => {
      if (sidebar && sidebar.classList.contains('open')) {
        closeSidebar();
      } else {
        openSidebar();
      }
    });
  }

  if (backdrop) {
    backdrop.addEventListener('click', closeSidebar);
  }

  // --- Sidebar Live Filter ---
  const filterInput = document.getElementById('note-filter');
  const clearFilterBtn = document.getElementById('clear-filter');
  const navSections = document.querySelectorAll('.nav-section');

  function filterNotes(query) {
    const q = query.trim().toLowerCase();
    if (clearFilterBtn) {
      clearFilterBtn.hidden = q.length === 0;
    }

    navSections.forEach(section => {
      const items = section.querySelectorAll('.nav-item');
      let visibleCount = 0;

      items.forEach(item => {
        const text = item.textContent.toLowerCase();
        const matches = text.includes(q);
        if (matches) {
          item.classList.remove('dimmed');
          visibleCount++;
        } else {
          item.classList.add('dimmed');
        }
      });

      if (q.length > 0 && visibleCount === 0) {
        section.classList.add('hidden');
      } else {
        section.classList.remove('hidden');
      }
    });
  }

  if (filterInput) {
    filterInput.addEventListener('input', (e) => filterNotes(e.target.value));

    // Keyboard shortcut: '/' focuses filter
    window.addEventListener('keydown', (e) => {
      if (e.key === '/' && document.activeElement !== filterInput && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
        e.preventDefault();
        filterInput.focus();
        filterInput.select();
      } else if (e.key === 'Escape' && document.activeElement === filterInput) {
        filterInput.value = '';
        filterNotes('');
        filterInput.blur();
      }
    });
  }

  if (clearFilterBtn) {
    clearFilterBtn.addEventListener('click', () => {
      if (filterInput) {
        filterInput.value = '';
        filterNotes('');
        filterInput.focus();
      }
    });
  }

  // --- Table of Contents Generator ---
  const tocBox = document.getElementById('auto-toc');
  const tocList = document.getElementById('toc-list');
  const noteBody = document.querySelector('.note-body');

  if (tocBox && tocList && noteBody) {
    const headings = noteBody.querySelectorAll('h2, h3');
    if (headings.length >= 2) {
      headings.forEach((heading, idx) => {
        if (!heading.id) {
          heading.id = heading.textContent
            .toLowerCase()
            .replace(/[^\w\s-]/g, '')
            .trim()
            .replace(/\s+/g, '-') || `heading-${idx}`;
        }

        // Add clickable anchor to heading
        const anchor = document.createElement('a');
        anchor.className = 'header-anchor';
        anchor.href = `#${heading.id}`;
        anchor.setAttribute('aria-hidden', 'true');
        anchor.textContent = '#';
        heading.prepend(anchor);

        // Add item to TOC list
        const li = document.createElement('li');
        li.className = `toc-item toc-level-${heading.tagName.toLowerCase().slice(1)}`;
        
        const a = document.createElement('a');
        a.className = 'toc-link';
        a.href = `#${heading.id}`;
        // Clone heading text without anchor
        const clone = heading.cloneNode(true);
        const childAnchor = clone.querySelector('.header-anchor');
        if (childAnchor) childAnchor.remove();
        a.textContent = clone.textContent.trim();

        li.appendChild(a);
        tocList.appendChild(li);
      });

      tocBox.hidden = false;

      // TOC Collapse/Expand Toggle
      const tocToggle = tocBox.querySelector('.toc-toggle');
      if (tocToggle) {
        tocToggle.addEventListener('click', () => {
          const isCollapsed = tocBox.classList.toggle('collapsed');
          tocToggle.setAttribute('aria-expanded', (!isCollapsed).toString());
          const indicator = tocToggle.querySelector('.toc-toggle-indicator');
          if (indicator) indicator.textContent = isCollapsed ? '+' : '−';
        });
      }
    }
  }

  // --- Code Blocks & 1-Click Copy ---
  const codeBlocks = document.querySelectorAll('div.highlighter-rouge, pre.highlight');
  codeBlocks.forEach(block => {
    // Check if this block is a Mermaid diagram
    const isMermaid = block.classList.contains('language-mermaid') ||
      block.querySelector('code.language-mermaid') ||
      block.querySelector('pre.language-mermaid');
    if (isMermaid) return; // Handled by Mermaid loader

    const pre = block.tagName === 'PRE' ? block : block.querySelector('pre');
    if (!pre) return;

    // Detect language
    let lang = 'CODE';
    block.classList.forEach(cls => {
      if (cls.startsWith('language-') && cls !== 'language-plaintext') {
        lang = cls.replace('language-', '').toUpperCase();
      }
    });

    const code = pre.querySelector('code');
    if (code) {
      code.classList.forEach(cls => {
        if (cls.startsWith('language-') && cls !== 'language-plaintext') {
          lang = cls.replace('language-', '').toUpperCase();
        }
      });
    }

    // Create wrapper and header
    const wrapper = document.createElement('div');
    wrapper.className = 'code-wrapper';

    const header = document.createElement('div');
    header.className = 'code-header';

    const langSpan = document.createElement('span');
    langSpan.className = 'code-lang';
    langSpan.textContent = lang;

    const copyBtn = document.createElement('button');
    copyBtn.type = 'button';
    copyBtn.className = 'copy-btn';
    copyBtn.innerHTML = `
      <svg viewBox="0 0 24 24" width="13" height="13" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
      </svg>
      <span>Copy</span>
    `;

    copyBtn.addEventListener('click', async () => {
      const textToCopy = (code || pre).innerText;
      try {
        await navigator.clipboard.writeText(textToCopy);
        copyBtn.classList.add('copied');
        copyBtn.innerHTML = `
          <svg viewBox="0 0 24 24" width="13" height="13" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span>Copied!</span>
        `;
        setTimeout(() => {
          copyBtn.classList.remove('copied');
          copyBtn.innerHTML = `
            <svg viewBox="0 0 24 24" width="13" height="13" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
            <span>Copy</span>
          `;
        }, 2000);
      } catch (err) {
        console.error('Could not copy code:', err);
      }
    });

    header.appendChild(langSpan);
    header.appendChild(copyBtn);

    // Replace in DOM
    const parent = block.parentNode;
    parent.insertBefore(wrapper, block);
    wrapper.appendChild(header);
    wrapper.appendChild(block);
  });

  // --- Wrap Markdown Tables for Responsive Scrolling ---
  if (noteBody) {
    const tables = noteBody.querySelectorAll('table');
    tables.forEach(table => {
      if (!table.parentElement.classList.contains('table-wrapper')) {
        const wrap = document.createElement('div');
        wrap.className = 'table-wrapper';
        table.parentNode.insertBefore(wrap, table);
        wrap.appendChild(table);
      }
    });
  }

  // --- Mermaid Diagram Loader & Renderer ---
  const rawMermaidBlocks = document.querySelectorAll(
    'div.language-mermaid, pre.language-mermaid, code.language-mermaid'
  );

  if (rawMermaidBlocks.length > 0) {
    // Collect unique blocks
    const targetBlocks = [];
    rawMermaidBlocks.forEach(el => {
      const container = el.closest('div.highlighter-rouge') || el.closest('pre') || el;
      if (!targetBlocks.includes(container)) {
        targetBlocks.push(container);
      }
    });

    // Store raw mermaid code for each container
    const diagramData = targetBlocks.map((container, i) => {
      const codeEl = container.querySelector('code') || container;
      const code = codeEl.innerText.trim();
      const wrap = document.createElement('div');
      wrap.className = 'mermaid-container';
      wrap.id = `mermaid-chart-${i}`;
      container.parentNode.replaceChild(wrap, container);
      return { wrap, code, id: `mermaid-chart-${i}` };
    });

    // Dynamically load Mermaid library
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js';
    script.onload = () => {
      window.renderMermaidDiagrams = function () {
        const isDark = getCurrentTheme() === 'dark';
        window.mermaid.initialize({
          startOnLoad: false,
          securityLevel: 'loose',
          theme: isDark ? 'dark' : 'neutral',
          themeVariables: isDark ? {
            darkMode: true,
            background: '#1e2026',
            mainBkg: '#1e2026',
            primaryColor: '#e0a458',
            primaryTextColor: '#dcdde1',
            primaryBorderColor: '#e0a458',
            lineColor: '#8d92a0',
            secondaryColor: '#252830',
            tertiaryColor: '#15161a',
            noteBkgColor: '#252830',
            noteTextColor: '#dcdde1',
            fontFamily: 'system-ui, sans-serif'
          } : {
            darkMode: false,
            background: '#f1ece3',
            mainBkg: '#f1ece3',
            primaryColor: '#a45d12',
            primaryTextColor: '#2b2926',
            primaryBorderColor: '#a45d12',
            lineColor: '#77705f',
            fontFamily: 'system-ui, sans-serif'
          }
        });

        diagramData.forEach(async ({ wrap, code, id }) => {
          try {
            wrap.innerHTML = `<pre class="mermaid">${code}</pre>`;
          } catch (e) {
            console.error('Mermaid render error:', e);
          }
        });

        window.mermaid.run({
          nodes: document.querySelectorAll('.mermaid')
        });
      };

      window.renderMermaidDiagrams();
    };
    document.head.appendChild(script);
  }
})();

